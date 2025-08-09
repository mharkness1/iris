import './sidebar.css';
import { type Colour, toCssString } from 'iris-colour';
import RemoveColourButton from './remove_colour_button';

type Props = {
    colour: Colour;
}

const ColourBlock: React.FC<Props> = ({ colour }) => {
    //const colourContext = useContext(ColourContext)

    return (
        <div className='colour-block' style={{ background: toCssString(colour) }}>
            <div className='flex flex-row justify-between'>
            <RemoveColourButton lum={colour.luminance} id={colour.name} />
            </div>
            <div className='flex flex-row justify-between'>
                <p>Bottom</p>
            </div>
        </div>
    )
}

export default ColourBlock;

/*
    hex: string;
    rgb: RGB;
    hsl: HSL;
    hsv: HSV;
    luminance: number;
    name: string;
*/