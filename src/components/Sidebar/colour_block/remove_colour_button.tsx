import { useContext, useEffect } from "react";
import { ColourContext } from "../../../context/colourContext";
import { type Colour } from "iris-colour";

const RemoveColourButton: React.FC<{ col: Colour, handleSidebar: () => void }> = ({ col, handleSidebar }) => {
    const colourContext = useContext(ColourContext);
    const colours = colourContext?.colours;
    const removeColour = colourContext?.removeColour;
    const primaryColour = colourContext?.primaryColour;
    const setPrimaryColour = colourContext?.setPrimaryColour;
    const sidebarCheck = ((colourContext?.colours?.length ?? 1) === 1)
    const useWhite = (col.luminance < 0.179 );

    const handlePrimaryColour = () => setPrimaryColour && setPrimaryColour(null);
    
    useEffect(() => {
        if (primaryColour && colours && !(col.name === primaryColour.name)) {
            handlePrimaryColour();
        }
    }, [colours, primaryColour])

    const onRemoveClick = (id: string) => {
        if (sidebarCheck) {
            handleSidebar();
        }
        if (removeColour) {
            removeColour(id)
        }
    };

    return (
        <button className='justify-end' onClick={() => onRemoveClick(col.name)}>
            { useWhite ? 
            <svg className="w-[20px] h-[20px] text-white hover:fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            :
            <svg className="w-[20px] h-[20px] text-gray-800 hover:fill-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            }
        </button>
    );
};

export default RemoveColourButton;