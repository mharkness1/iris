import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import { toCssString, type Colour } from "iris-colour";
import './colour_square.css'

type Props = {
    colour: Colour,
}

const ColourSquare: React.FC<Props> = ({ colour }) => {
    const useWhite = (colour.luminance < 0.179 );
    const colourContext = useContext(ColourContext)
    const cssColour = toCssString(colour)
    const isPrimaryColour: boolean = (colourContext?.primaryColour?.rgb === colour?.rgb)

    
    return (
        <div className={'colour-square'} style={{ background: cssColour,  border: isPrimaryColour ? '1px solid white' : '1px solid ' + cssColour}}>
            <p style={{color: useWhite ? "#ffffff" : "#000000"}} className="text-center text-[1.5rem]">#{colour.hex.toUpperCase()}</p>
        </div>
    )
}

export default ColourSquare;