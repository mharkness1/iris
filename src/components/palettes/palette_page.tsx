import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import './palette.css'
import PaletteRender from "./palette";
import { genAnalagousPalette, genComplement, genMonochromePalette, genQuadraticPalette, genShades, genTetradicPalette, genTriadicPalette, genTints, genTones } from "iris-colour";
import type { PaletteDisplay } from "../pages/populated";

type Props = {
    paletteDisplay: PaletteDisplay
}

const PalettePage: React.FC<Props> = ({ paletteDisplay }) => {
    const colourContext = useContext(ColourContext)
    const primaryColour = colourContext?.primaryColour

    if (!primaryColour) return null;

    const ComplementPalette = genComplement(primaryColour)
    const AnalagousPalette = genAnalagousPalette(primaryColour)
    const TriadicPalette = genTriadicPalette(primaryColour)
    const TetraticPalette = genTetradicPalette(primaryColour)
    const QuadraticPalette = genQuadraticPalette(primaryColour)
    const MonochromePalette = genMonochromePalette(primaryColour)
    const Shades = genShades(primaryColour)
    const Tints = genTints(primaryColour)
    const Tones = genTones(primaryColour)

        return (
            <div className="palette-page">
                {(paletteDisplay === "fixed" || paletteDisplay === "all") && (
                <>
                <div className="palette-row">
                    <PaletteRender palette={ComplementPalette} />
                    <PaletteRender palette={AnalagousPalette} />
                    <PaletteRender palette={TriadicPalette} />
                </div>
                <div className="palette-row">
                    <PaletteRender palette={TetraticPalette} />
                    <PaletteRender palette={QuadraticPalette} />
                </div>
                </>
                )}
                {(paletteDisplay === "variable" || paletteDisplay === "all") && (
                <>
                <div className="palette-row">
                    <PaletteRender palette={MonochromePalette} />
                </div>
                <div className="palette-row">
                    <PaletteRender palette={Shades} />
                </div>
                <div className="palette-row">
                    <PaletteRender palette={Tints} />
                </div>
                <div className="palette-row">
                    <PaletteRender palette={Tones} />
                </div>
                </>
                )}
            </div>
    )
}

export default PalettePage;

//export { genMonochromePalette, genShades, genTints, genTones } from "./components/colourspace.js";
