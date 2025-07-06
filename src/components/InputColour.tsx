import { useState } from "react";
import HexInput from "./HexInput";
import HSLInput from "./HSLInput";
import RgbInput from "./RGBInput";

export type ColourFormat = "hex" | "rgb" | "hsl" | null

const getColourTypeInput = () => {
    const [colourType, setColourType] = useState<ColourFormat>("hex");

    const onOptionChange = (event: any) => {
        setColourType(event.target.value);
        console.log("type selected = ", event.target.value);
    };

    return {
    colourType: colourType,
    renderTypeInput:(
        <select className="outline-gray-500 outline-1 pl-1 pb-1.5 pt-1.5" name="selectedFormat" onChange={onOptionChange} defaultValue="hex">
            <option value="hex">hex</option>
            <option value="rgb">rgb</option>
            <option value="hsl">hsl</option>
        </select>
        )
    }
}

const AddButton = () => {
    return (
        <button className='outline-gray-500 outline-1 w-8 h-8 rounded-full text-xl hover:bg-gray-500'>+</button>
    )
}

export default function InputColour() {
    const { colourType, renderTypeInput } = getColourTypeInput();
    switch (colourType) {
        case "hex":
            return (
                <div>
                    <form className="card">
                        { renderTypeInput }
                        <HexInput />
                        <AddButton />
                    </form>
                </div>
            )
        case "hsl":
            return (
                <div>
                    <form className="card">
                        { renderTypeInput }
                        <HSLInput />
                        <AddButton />
                    </form>
                </div>
            )
        case "rgb":
            return (
                <div>
                    <form className="card">
                        { renderTypeInput }
                        <RgbInput />
                        <AddButton />
                    </form>
                </div>
            )
        default:
            return null
}
  }
