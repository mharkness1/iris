import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import '../../App.css'
import PalettePage from "../palettes/palette_block";

const Populated: React.FC = () => {
    const colourContext = useContext(ColourContext);
    const primaryColour = colourContext?.primaryColour;
    if (primaryColour) {
        return (
            <div className="main-section">
                <div className="flex flex-row items-center justify-between">
                    <div className="self-start flex flex-row items-center gap-6">
                        <p className="text-[2.5rem] pixel-font">#{primaryColour.hex.toUpperCase()}</p>
                        <button><p className="text-[2rem] pixel-font hover:underline decoration-4">Fixed</p></button>
                        <button><p className="text-[2rem] pixel-font hover:underline decoration-4">Variable</p></button>
                        <button><p className="text-[2rem] pixel-font hover:underline decoration-4">Spectrum</p></button>
                        <button><p className="text-[2rem] pixel-font hover:underline decoration-4">All</p></button>
                    </div>
                </div>
                <PalettePage />
            </div>
        )
    }
};

export default Populated;