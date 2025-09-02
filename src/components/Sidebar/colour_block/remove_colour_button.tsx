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
        <button className='justify-self-start self-start' onClick={() => onRemoveClick(col.name)}>
            { useWhite ? 
                <svg
                    className="w-5 h-5 hover:bg-white"
                    width="100%"
                    height="100%"
                    viewBox="0 0 473 473"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 2,
                        stroke: "#ffffff",
                        fill: "#ffffff",
                    }}
                    >
                    <g transform="matrix(1,0,0,1,-94.4882,-1922.32)">
                        <g transform="matrix(1,0,0,1,-543.307,32.5585)">
                        <g transform="matrix(1,0,0,1,-307.087,0)">
                            <path d="M1417.32,1889.76l-0,472.441l-472.441,-0l-0,-472.441l472.441,-0Zm-66.667,66.666l-339.107,0l-0,339.108l339.107,0l0,-339.108Z" />
                        </g>
                        <g transform="matrix(0.670695,0,0,1.043,84.75,-85.8297)">
                            <path
                            d="M1056.97,2228.5l0,-30.818l-47.924,0l-0,-30.818l47.924,0l0,-30.817l47.925,-0l0,-30.818l-47.925,-0l0,-30.818l-47.924,-0l-0,-30.818l47.924,0l0,-30.818l47.925,0l0,30.818l47.925,0l-0,30.818l47.925,-0l-0,-30.818l47.924,0l0,-30.818l47.925,0l-0,30.818l47.925,0l-0,30.818l-47.925,-0l-0,30.818l-47.925,-0l0,30.818l47.925,-0l-0,30.817l47.925,0l-0,30.818l-47.925,0l-0,30.818l-47.925,-0l0,-30.818l-47.924,0l-0,-30.818l-47.925,0l-0,30.818l-47.925,0l0,30.818l-47.925,-0Z"
                            fillRule="nonzero"
                            />
                        </g>
                        </g>
                    </g>
                    </svg> 
            :
               <svg
                    className="w-5 h-5 hover:bg-black"
                    width="100%"
                    height="100%"
                    viewBox="0 0 473 473"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 2,
                        stroke: "#000000",
                        fill: "#000000",
                    }}
                    >
                    <g transform="matrix(1,0,0,1,-94.4882,-1922.32)">
                        <g transform="matrix(1,0,0,1,-543.307,32.5585)">
                        <g transform="matrix(1,0,0,1,-307.087,0)">
                            <path d="M1417.32,1889.76l-0,472.441l-472.441,-0l-0,-472.441l472.441,-0Zm-66.667,66.666l-339.107,0l-0,339.108l339.107,0l0,-339.108Z" />
                        </g>
                        <g transform="matrix(0.670695,0,0,1.043,84.75,-85.8297)">
                            <path
                            d="M1056.97,2228.5l0,-30.818l-47.924,0l-0,-30.818l47.924,0l0,-30.817l47.925,-0l0,-30.818l-47.925,-0l0,-30.818l-47.924,-0l-0,-30.818l47.924,0l0,-30.818l47.925,0l0,30.818l47.925,0l-0,30.818l47.925,-0l-0,-30.818l47.924,0l0,-30.818l47.925,0l-0,30.818l47.925,0l-0,30.818l-47.925,-0l-0,30.818l-47.925,-0l0,30.818l47.925,-0l-0,30.817l47.925,0l-0,30.818l-47.925,0l-0,30.818l-47.925,-0l0,-30.818l-47.924,0l-0,-30.818l-47.925,0l-0,30.818l-47.925,0l0,30.818l-47.925,-0Z"
                            fillRule="nonzero"
                            />
                        </g>
                        </g>
                    </g>
                    </svg> 
            }
        </button>
    );
};

export default RemoveColourButton;