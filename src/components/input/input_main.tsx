import { useContext, useState } from "react";
import HexInput from "./hex_input";
import HslInput from "./hsl_input";
import RgbInput from "./rgb_input";
import { formatHSLValues, formatRGBValues, getRandomHSL, getRandomRGB, getRandomHex } from "./helpers";
import { ColourContext, type ColourContextType } from "../../context/colourContext";
import { createColour, InputParser, type ColourModes } from "iris-colour";

export type ColourFormat = "hex" | "rgb" | "hsl"

const useColourTypeInput = () => {
    const [colourType, setColourType] = useState<ColourFormat>("hex");

    const onOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColourType(event.target.value as ColourFormat);
        console.log("type selected = ", event.target.value);
    };

    return {
    colourType: colourType,
    renderTypeInput:(
        <select className="pl-1 pb-1.5 pt-1.5 text-2xl" name="selectedFormat" onChange={onOptionChange} >
            <option value="hex">hex</option>
            <option value="rgb">rgb</option>
            <option value="hsl">hsl</option>
        </select>
        )
    }
}

const AddButton = () => {
    return (
        <button type="submit" id="button_add">
            <svg className="w-10 h-10 text-gray-800 dark:text-white dark:hover:fill-white dark:hover:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
        </button>

    )
}

const RandomButton = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button type="button" id="random_button" onClick={onClick}>
            <svg className="w-6 h-6 secondary-col" width="100%" height="100%" viewBox="0 0 284 284" version="1.1" style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
                stroke: "currentcolor",
                fill: "currentcolor",
                }}
                >
                <g transform="matrix(1,0,0,1,-897.638,-1866.14)">
                    <g>
                        <path d="M1074.8,2043.31l35.433,0l0,17.717l17.717,-0l-0,17.716l17.716,0l0,-35.433l35.433,0l0,106.299l-106.299,0l0,-35.433l35.433,0l0,-17.716l-17.716,-0l-0,-17.717l-17.717,0l0,-35.433Z"/>
                        <path d="M915.354,1866.14l17.717,-0l-0,17.716l17.716,0l0,17.717l17.717,-0l-0,17.716l17.716,0l0,17.717l17.717,-0l0,35.433l-35.433,-0l-0,-17.717l-17.717,0l0,-17.716l-17.716,-0l-0,-17.717l-17.717,0l0,-17.716l-17.716,-0l-0,-17.717l17.716,0l0,-17.716Z"/>
                        <path d="M1092.52,1937.01l-0,-17.717l17.716,0l0,-17.716l-35.433,-0l0,-35.433l106.299,-0l0,106.299l-35.433,-0l0,-35.433l-17.716,-0l-0,17.716l-17.717,0l0,17.717l-17.716,-0l-0,17.716l-17.717,0l0,17.717l-17.716,0l-0,17.717l-17.717,-0l0,17.716l-17.716,0l-0,17.717l-17.717,-0l0,17.716l-17.717,0l0,17.717l-17.716,-0l-0,17.716l-17.717,0l0,17.717l-17.716,-0l-0,17.716l-17.717,0l0,-17.716l-17.716,-0l-0,-17.717l17.716,0l0,-17.716l17.717,-0l-0,-17.717l17.716,0l0,-17.716l17.717,-0l-0,-17.717l17.716,0l0,-17.716l17.717,-0l0,-17.717l17.717,0l-0,-17.717l17.716,0l0,-17.716l17.717,-0l-0,-17.717l17.716,0l0,-17.716l17.717,-0Z"/>
                    </g>
                </g>
            </svg>
        </button>
    )
}

const InputColour: React.FC = () => {
    const { colourType, renderTypeInput } = useColourTypeInput();
    const [rgbValues, setRgbValues] = useState<[string, string, string]>(['', '', '']);
    const [hslValues, setHslValues] = useState<[string, string, string]>(['','','']);
    const [hexValues, setHexValues] = useState<string>('');
    const colContext = useContext(ColourContext)
    const { saveColour, incrementer } = colContext as ColourContextType

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
    
    const afterSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let colInput: string = '';
        const target = e.target as typeof e.target & {
            [key: number]: { value: string };
        };
        if (colourType === 'hex') {
            colInput = target[2].value;
        } else if (colourType === 'rgb'){
            colInput = '(' + target[2].value + ',' + target[3].value + ',' + target[4].value + ')';
        } else {
            colInput = '(' + target[2].value + ',' + target[3].value + '%,' + target[4].value + '%)';
        };
        console.log(colInput);
        const parsedInput = InputParser(colInput, colourType as string);
        console.log(parsedInput);
        const col = createColour(parsedInput as ColourModes, String(incrementer), colourType as string);
        saveColour(col);
    }

    switch (colourType) {
        case "hex":
            return (
                <div>
                    <form className="card pixel-font" onSubmit={afterSubmission}>
                        <RandomButton onClick={handleRandomHexClick}/>
                        { renderTypeInput }
                        <HexInput
                        onChange={handleHexChange}
                        values={hexValues}
                        />
                        <AddButton />
                    </form>
                </div>
            )
        case "hsl":
            return (
                <div>
                    <form className="card pixel-font" onSubmit={afterSubmission}>
                        <RandomButton onClick={handleRandomHSLClick}/>
                        { renderTypeInput }
                        <HslInput
                        onChange={handleHSLChange}
                        values={hslValues}
                        onBlurField={handleHSLBlur}/>
                        <AddButton />
                    </form>
                </div>
            )
        case "rgb":
            return (
                <div>
                    <form className="card pixel-font" onSubmit={afterSubmission}>
                        <RandomButton onClick={handleRandomRGBClick} />
                        { renderTypeInput }
                        <RgbInput
                        onChange={handleRGBChange}
                        values={rgbValues}
                        onBlurField={handleRGBBlur}/>
                        <AddButton />
                    </form>
                </div>
            )
        default:
            return null
        }
}

export default InputColour