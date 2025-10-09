import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import './palette.css'
import { genAnalogousPalette, genComplement, genMonochromePalette, genQuadraticPalette, genShades, genTetradicPalette, genTriadicPalette, genTints, genTones, genSpectrumPalette } from "iris-colour";
import type { PaletteDisplay } from "../pages/palettes/populated";
import { useParamState } from "../../hooks/ParamState";
import PaletteRow from "./palette_row";

type Props = {
    paletteDisplay: PaletteDisplay
}

const PalettePage: React.FC<Props> = ({ paletteDisplay }) => {
    const { params } = useParamState();

    const colourContext = useContext(ColourContext)
    const primaryColour = colourContext?.primaryColour

    if (!primaryColour) return null;

    const ComplementPalette = genComplement(primaryColour)
    const AnalogousPalette = genAnalogousPalette(primaryColour, params.analogousAngle)
    const TriadicPalette = genTriadicPalette(primaryColour)
    const TetraticPalette = genTetradicPalette(primaryColour)
    const QuadraticPalette = genQuadraticPalette(primaryColour)
    const MonochromePalette = genMonochromePalette(primaryColour, params.blackTolerance, params.whiteTolerance, params.grayTolerance, params.maxSize)
    const Shades = genShades(primaryColour, params.stepSize, params.blackTolerance, params.whiteTolerance, params.maxSize)
    const Tints = genTints(primaryColour, params.stepSize, params.blackTolerance, params.whiteTolerance, params.maxSize)
    const Tones = genTones(primaryColour, params.stepSize, params.grayTolerance, params.maxSize)

    const SpectrumPalettes = colourContext.colours.filter(c => c.hex !== primaryColour.hex).map(c => genSpectrumPalette(primaryColour, c, params.spectrumSize))

        return (
            <div className="palette-page">
                {(paletteDisplay === "fixed" || paletteDisplay === "all") && (
                <>
                    <PaletteRow palettes={[ComplementPalette, AnalogousPalette, TriadicPalette]} />
                    <PaletteRow palettes={[TetraticPalette, QuadraticPalette]} />
                </>
                )}
                {(paletteDisplay === "variable" || paletteDisplay === "all") && (
                <>
                    <PaletteRow palettes={[MonochromePalette]} />
                    <PaletteRow palettes={[Shades]} />
                    <PaletteRow palettes={[Tints]} />
                    <PaletteRow palettes={[Tones]} />
                </>
                )}
                {(paletteDisplay === "spectrum" || paletteDisplay === "all") && (
                    <>
                        {SpectrumPalettes.map((palette, i) => (
                            <PaletteRow key={i} palettes={[palette]} />
                        ))}
                    </>
                )}
            </div>
    )
}

export default PalettePage;

