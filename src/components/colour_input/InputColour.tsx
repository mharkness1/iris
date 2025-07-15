import { useState } from "react";
import HexInput from "./HexInput";
import HSLInput from "./HSLInput";
import RgbInput from "./RGBInput";

export type ColourFormat = "hex" | "rgb" | "hsl" | null

const getRandomRGB = (): [string, string, string] => {
    const pad = (n: number) => n.toString().padStart(3, '0');
    return [
        pad(Math.floor(Math.random() * 256)),
        pad(Math.floor(Math.random() * 256)),
        pad(Math.floor(Math.random() * 256)),
    ];
};

const useColourTypeInput = () => {
    const [colourType, setColourType] = useState<ColourFormat>("hex");

    const onOptionChange = (event: any) => {
        setColourType(event.target.value);
        console.log("type selected = ", event.target.value);
    };

    return {
    colourType: colourType,
    renderTypeInput:(
        <select className="pl-1 pb-1.5 pt-1.5 text-2xl" name="selectedFormat" onChange={onOptionChange} defaultValue="hex">
            <option value="hex">hex</option>
            <option value="rgb">rgb</option>
            <option value="hsl">hsl</option>
        </select>
        )
    }
}

const AddButton = () => {
    return (
        <button type="button" id="button_add">
            <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
        </button>

    )
}

const RandomButton = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button type="button" id="random_button" onClick={onClick}>
            <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"/>
            </svg>
        </button>
    )
}

export default function InputColour() {
    const { colourType, renderTypeInput } = useColourTypeInput();
    const [rgbValues, setRgbValues] = useState<[string, string, string]>(['', '', '']);
   
    const handleRandomRGBClick = () => {
        const newColour = getRandomRGB();
        setRgbValues(newColour);
    }

    const handleRGBChange = (newValues: [string, string, string]) => {
        setRgbValues(newValues)
    }

    const handleRGBBlur = (index: number, rawValue: string) => {
    if (!/^\d{1,3}$/.test(rawValue)) {
        rawValue = "000";
    }

    let num = parseInt(rawValue, 10);
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    if (num > 255) num = 255;

    const padded = num.toString().padStart(3, '0');

    const updated = [...rgbValues] as [string, string, string];
    updated[index] = padded;
    setRgbValues(updated);
    };
    
    switch (colourType) {
        case "hex":
            return (
                <div>
                    <div className="card">
                        <RandomButton />
                        { renderTypeInput }
                        <HexInput />
                        <AddButton />
                    </div>
                </div>
            )
        case "hsl":
            return (
                <div>
                    <div className="card">
                        <RandomButton />
                        { renderTypeInput }
                        <HSLInput />
                        <AddButton />
                    </div>
                </div>
            )
        case "rgb":
            return (
                <div>
                    <div className="card">
                        <RandomButton onClick={handleRandomRGBClick} />
                        { renderTypeInput }
                        <RgbInput
                        onChange={handleRGBChange}
                        values={rgbValues}
                        onBlurField={handleRGBBlur}/>
                        <AddButton />
                    </div>
                </div>
            )
        default:
            return null
}
  }
