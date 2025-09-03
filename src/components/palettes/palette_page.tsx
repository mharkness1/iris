import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import './palette.css'
import PaletteRender from "./palette";
import { genAnalagousPalette, genComplement, genMonochromePalette, genQuadraticPalette, genShades, genTetradicPalette, genTriadicPalette, genTints, genTones } from "iris-colour";
import type { PaletteDisplay } from "../pages/populated";
import { useParamState } from "../../hooks/ParamState";

type Props = {
    paletteDisplay: PaletteDisplay
}

const PalettePage: React.FC<Props> = ({ paletteDisplay }) => {
    const { params } = useParamState();

    const colourContext = useContext(ColourContext)
    const primaryColour = colourContext?.primaryColour

    if (!primaryColour) return null;

    const ComplementPalette = genComplement(primaryColour)
    const AnalagousPalette = genAnalagousPalette(primaryColour, params.analagousAngle)
    const TriadicPalette = genTriadicPalette(primaryColour)
    const TetraticPalette = genTetradicPalette(primaryColour)
    const QuadraticPalette = genQuadraticPalette(primaryColour)
    const MonochromePalette = genMonochromePalette(primaryColour, params.blackTolerance, params.whiteTolerance, params.grayTolerance, params.maxSize)
    const Shades = genShades(primaryColour, params.stepSize, params.blackTolerance, params.whiteTolerance, params.maxSize)
    const Tints = genTints(primaryColour, params.stepSize, params.blackTolerance, params.whiteTolerance, params.maxSize)
    const Tones = genTones(primaryColour, params.stepSize, params.grayTolerance, params.maxSize)

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

