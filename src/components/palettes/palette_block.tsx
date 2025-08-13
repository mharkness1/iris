import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import './palette.css'
import PaletteRender from "./palette";
import { genAnalagousPalette, genComplement, genMonochromePalette, genQuadraticPalette, genShades, genTetradicPalette, genTriadicPalette, genTints, genTones } from "iris-colour";


const PalettePage: React.FC = () => {
    const colourContext = useContext(ColourContext)
    const primaryColour = colourContext?.primaryColour

    if (primaryColour) {
        const ComplementPalette = genComplement(primaryColour)
        console.log(ComplementPalette)
        const AnalagousPalette = genAnalagousPalette(primaryColour)
        console.log(AnalagousPalette)
        const TriadicPalette = genTriadicPalette(primaryColour)
        console.log(TriadicPalette)
        const TetraticPalette = genTetradicPalette(primaryColour)
        const QuadraticPalette = genQuadraticPalette(primaryColour)
        const MonochromePalette = genMonochromePalette(primaryColour)
        const Shades = genShades(primaryColour)
        const Tints = genTints(primaryColour)
        const Tones = genTones(primaryColour)

        return (
            <div className="palette-page">
                <div className="palette-row">
                    <PaletteRender palette={ComplementPalette} />
                    <PaletteRender palette={AnalagousPalette} />
                    <PaletteRender palette={TriadicPalette} />
                </div>
                <div className="palette-row">
                    <PaletteRender palette={TetraticPalette} />
                    <PaletteRender palette={QuadraticPalette} />
                </div>
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
            </div>
    )
}
}

export default PalettePage;

//export { genMonochromePalette, genShades, genTints, genTones } from "./components/colourspace.js";
