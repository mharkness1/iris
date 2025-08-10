import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import '../../App.css'

const Populated: React.FC = () => {
    const colourContext = useContext(ColourContext);
    const primaryColour = colourContext?.primaryColour;
    
    if (primaryColour) {
        return (
        <div className="main-section">
            <p className="text-2xl">Colour: {primaryColour.name}</p>
        </div>
        )
    } else {
    return (
        <div className="main-section justify-center">
            <div className="self-center justify-self-center placeholder">
                <h1>Select a Colour</h1>
                <h2 className=" text-3xl">from your swatch      
                    <svg className="w-[36px] h-[36px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="1" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z"/>
                    </svg>
                </h2>
            </div>
        </div>
  )
}
};

export default Populated;