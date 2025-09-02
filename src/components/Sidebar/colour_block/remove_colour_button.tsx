import { useContext } from "react";
import { ColourContext } from "../../../context/colourContext";
import { type Colour } from "iris-colour";

const RemoveColourButton: React.FC<{ col: Colour }> = ({ col }) => {
    const colourContext = useContext(ColourContext);
    const removeColour = colourContext?.removeColour;
    const useWhite = (col.luminance < 0.179 );

    const onRemoveClick = (id: string) => {
        if (removeColour) {
            removeColour(id)
        }
    };

    return (
        <button className='justify-end' onClick={() => onRemoveClick(col.name)}>
            { useWhite ? 
            <svg className="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            :
            <svg className="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#000" viewBox="0 0 24 24">
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            }
        </button>
    );
};

export default RemoveColourButton;