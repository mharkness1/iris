import './sidebar.css';
import { type Colour, toCssString } from 'iris-colour';

type Props = {
    colour: Colour;
    removeColour: (id: string) => void;
}

const RemoveColourButton: React.FC<{ lum: number }> = ({ lum }) => {
    const useWhite = (lum < 0.179 );
    return (
        <button>
            { useWhite ? 
            <svg className="w-[20px] h-[20px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            :
            <svg className="w-[20px] h-[20px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            }
        </button>
    );
};

const ColourBlock: React.FC<Props> = ({ colour, removeColour }) => {
    return (
        <div className='colour-block outline-0' style={{ background: toCssString(colour) }}>
            <RemoveColourButton lum={colour.luminance} />
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