import '../sidebar.css';
import './colour_block.css'
import { type Colour, toCssString } from 'iris-colour';
import RemoveColourButton from './remove_colour_button';
import { useContext } from 'react';
import { ColourContext } from '../../../context/colourContext';

type Props = {
    colour: Colour;
}

const ColourBlock: React.FC<Props> = ({ colour }) => {
    const useWhite = (colour.luminance < 0.3 );
    const colourContext = useContext(ColourContext)
    const setPrimaryColour = colourContext?.setPrimaryColour

    const cssColour = toCssString(colour)
    const isPrimaryColour = colourContext?.primaryColour?.hex === colour.hex;

    const handlePrimaryColour = (col: Colour) => {
        if (setPrimaryColour && colourContext?.primaryColour?.hex !== colour.hex) {
            setPrimaryColour(col);
        }
        if (setPrimaryColour && isPrimaryColour) {
            setPrimaryColour(null);
        }
    }
    


    return (
        <div className={'colour-block m-3'} style={{ background: cssColour,  border: isPrimaryColour ? '2px solid var(--color-secondary)' : '2px solid ' + cssColour}} onClick={() => handlePrimaryColour(colour)}>
            <div className='text-center w-full self-center'>
                <p style={{ color: useWhite ? "#ffffff" : "#000000" }} className='text-sm'>#{colour.hex.toUpperCase()}</p>
            </div>
            <RemoveColourButton col={colour} />
        </div>
    )
}

export default ColourBlock;