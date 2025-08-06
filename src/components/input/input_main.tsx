import { useState } from "react";
import HexInput from "./hex_input";
import HslInput from "./hsl_input";
import RgbInput from "./rgb_input";
import { formatHSLValues, formatRGBValues, getRandomHSL, getRandomRGB, getRandomHex } from "./helpers";

export type ColourFormat = "hex" | "rgb" | "hsl" | null

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
    const [hslValues, setHslValues] = useState<[string, string, string]>(['','','']);
    const [hexValues, setHexValues] = useState<string>('');

    const handleHSLChange = (newValues: [string, string, string]) => {
        setHslValues(newValues);
    }

    const handleHSLBlur = (index: number, rawValue: string) => {
        const padded = formatHSLValues(index, rawValue);
        const updated = [...hslValues] as [string, string, string];
        updated[index] = padded;
        setHslValues(updated);
    }

    const handleRandomHexClick = () => {
        const newColour = getRandomHex();
        setHexValues(newColour);
    }

    const handleRandomRGBClick = () => {
        const newColour = getRandomRGB();
        setRgbValues(newColour);
    }

    const handleRandomHSLClick = () => {
        const newColour = getRandomHSL();
        setHslValues(newColour);
    }

    const handleHexChange = (newValue: string) => {
        console.log("Updating hex state to", newValue);
        setHexValues(newValue);
    }

    const handleRGBChange = (newValues: [string, string, string]) => {
        setRgbValues(newValues);
    }

    const handleRGBBlur = (index: number, rawValue: string) => {
        const padded = formatRGBValues(rawValue);
        const updated = [...rgbValues] as [string, string, string];
        updated[index] = padded;
        setRgbValues(updated);
    };
    
    switch (colourType) {
        case "hex":
            return (
                <div>
                    <div className="card">
                        <RandomButton onClick={handleRandomHexClick}/>
                        { renderTypeInput }
                        <HexInput
                        onChange={handleHexChange}
                        values={hexValues}
                        />
                        <AddButton />
                    </div>
                </div>
            )
        case "hsl":
            return (
                <div>
                    <div className="card">
                        <RandomButton onClick={handleRandomHSLClick}/>
                        { renderTypeInput }
                        <HslInput
                        onChange={handleHSLChange}
                        values={hslValues}
                        onBlurField={handleHSLBlur}/>
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
