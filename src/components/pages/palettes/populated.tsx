import { useContext, useState } from "react";
import { ColourContext } from "../../../context/colourContext";
import '../../../App.css'
import PalettePage from "../../palettes/palette_page";

export type PaletteDisplay = "all" | "fixed" | "variable" | "spectrum"

const Populated: React.FC = () => {
    const [paletteDisplay, setPaletteDisplay] = useState<PaletteDisplay>("all")
    const colourContext = useContext(ColourContext);
    const primaryColour = colourContext?.primaryColour;
    if (primaryColour) {
        return (
            <div className="main-section">
                <div className="flex flex-row items-center justify-between">
                    <div className="self-start flex flex-row items-center flex-wrap">
                        <p className="text-[2.2rem] pixel-font">#{primaryColour.hex.toUpperCase()}</p>
                        <button onClick={() => setPaletteDisplay("all")}><p className="text-[1.8em] pixel-font mx-3 hover:underline decoration-4">All</p></button>
                        <button onClick={() => setPaletteDisplay("fixed")}><p className="text-[1.8rem] pixel-font mx-3 hover:underline decoration-4">Fixed</p></button>
                        <button onClick={() => setPaletteDisplay("variable")}><p className="text-[1.8rem] pixel-font mx-3 hover:underline decoration-4">Variable</p></button>
                        <button onClick={() => setPaletteDisplay("spectrum")}><p className="text-[1.8rem] pixel-font mx-3 hover:underline decoration-4">Spectrum</p></button>
                    </div>
                </div>
                <PalettePage paletteDisplay={paletteDisplay}/>
            </div>
        )
    }
};

export default Populated;