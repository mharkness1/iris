import '../sidebar.css';
import './colour_block.css'
import { type Colour, toCssString } from 'iris-colour';
import RemoveColourButton from './remove_colour_button';
import EditColourButton from './edit_colour_button';
import { useContext } from 'react';
import { ColourContext } from '../../../context/colourContext';

type Props = {
    colour: Colour;
    handleSidebar: () => void;
}

const ColourBlock: React.FC<Props> = ({ colour, handleSidebar }) => {
    const useWhite = (colour.luminance < 0.179 );
    const colourContext = useContext(ColourContext)
    const setPrimaryColour = colourContext?.setPrimaryColour

    const handlePrimaryColour = () => {
        if (setPrimaryColour) {
            setPrimaryColour(colour);
        }
    }
    const cssColour = toCssString(colour)
    const isPrimaryColour: boolean = (colourContext?.primaryColour?.name === colour?.name)
    
    return (
        <div className={'colour-block m-3'} style={{ background: cssColour,  border: isPrimaryColour ? '2px solid white' : '2px solid ' + cssColour}} onClick={handlePrimaryColour}>
            <div className='flex flex-row justify-between w-auto'>
            <EditColourButton lum={colour.luminance} />
            <RemoveColourButton lum={colour.luminance} id={colour.name} handleSidebar={handleSidebar} />
            </div>
            <div className='flex flex-row justify-between'>
                <p style={{ color: useWhite ? "#ffffff" : "#000000" }} className='text-sm'>Colour: {colour.name}</p>
            </div>
        </div>
    )
}

export default ColourBlock;