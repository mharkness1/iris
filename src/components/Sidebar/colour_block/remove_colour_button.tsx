import { useContext } from "react";
import { ColourContext } from "../../../context/colourContext";
import { type Colour } from "iris-colour";

const RemoveColourButton: React.FC<{ col: Colour }> = ({ col }) => {
    const colourContext = useContext(ColourContext);
    const removeColour = colourContext?.removeColour;
    const useWhite = (col.luminance < 0.179 );
    const primaryColour = colourContext?.primaryColour
    const setPrimaryColour = colourContext?.setPrimaryColour

    const onRemoveClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();

        if (primaryColour && setPrimaryColour && primaryColour.name === id) {
            setPrimaryColour(null);
        }
        if (removeColour) {
            removeColour(id);
        }
        if (setPrimaryColour && colourContext?.colours.length === 0) {
            setPrimaryColour(null);
        }
    };

    return (
        <button className='justify-self-start self-start' onClick={(e) => onRemoveClick(e, col.name)}>
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
                        <g transform="matrix(1,0,0,1,-354.331,-1937.01)">
                            <g transform="matrix(1,0,0,1,-283.465,47.2441)">
                                <g transform="matrix(1,0,0,1,-307.087,0)">
                                    <path d="M1417.32,1889.76L1417.32,2362.2L944.882,2362.2L944.882,1889.76L1417.32,1889.76ZM1350.66,1925.2L980.315,1925.2L980.315,2294.51L1350.66,2295.54L1350.66,1925.2Z"/>
                                </g>
                                <g transform="matrix(0.670695,0,0,1.043,67.3287,-97.6407)">
                                    <path d="M1056.97,2228.5L1056.97,2197.68L1009.05,2197.68L1009.05,2166.86L1056.97,2166.86L1056.97,2136.05L1104.9,2136.05L1104.9,2105.23L1056.97,2105.23L1056.97,2074.41L1009.05,2074.41L1009.05,2043.59L1056.97,2043.59L1056.97,2012.77L1104.9,2012.77L1104.9,2043.59L1152.83,2043.59L1152.83,2074.41L1200.75,2074.41L1200.75,2043.59L1248.67,2043.59L1248.67,2012.77L1296.6,2012.77L1296.6,2043.59L1344.52,2043.59L1344.52,2074.41L1296.6,2074.41L1296.6,2105.23L1248.67,2105.23L1248.67,2136.05L1296.6,2136.05L1296.6,2166.86L1344.52,2166.86L1344.52,2197.68L1296.6,2197.68L1296.6,2228.5L1248.67,2228.5L1248.67,2197.68L1200.75,2197.68L1200.75,2166.86L1152.83,2166.86L1152.83,2197.68L1104.9,2197.68L1104.9,2228.5L1056.97,2228.5Z" fillRule="nonzero"/>
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
                        <g transform="matrix(1,0,0,1,-354.331,-1937.01)">
                            <g transform="matrix(1,0,0,1,-283.465,47.2441)">
                                <g transform="matrix(1,0,0,1,-307.087,0)">
                                    <path d="M1417.32,1889.76L1417.32,2362.2L944.882,2362.2L944.882,1889.76L1417.32,1889.76ZM1350.66,1925.2L980.315,1925.2L980.315,2294.51L1350.66,2295.54L1350.66,1925.2Z"/>
                                </g>
                                <g transform="matrix(0.670695,0,0,1.043,67.3287,-97.6407)">
                                    <path d="M1056.97,2228.5L1056.97,2197.68L1009.05,2197.68L1009.05,2166.86L1056.97,2166.86L1056.97,2136.05L1104.9,2136.05L1104.9,2105.23L1056.97,2105.23L1056.97,2074.41L1009.05,2074.41L1009.05,2043.59L1056.97,2043.59L1056.97,2012.77L1104.9,2012.77L1104.9,2043.59L1152.83,2043.59L1152.83,2074.41L1200.75,2074.41L1200.75,2043.59L1248.67,2043.59L1248.67,2012.77L1296.6,2012.77L1296.6,2043.59L1344.52,2043.59L1344.52,2074.41L1296.6,2074.41L1296.6,2105.23L1248.67,2105.23L1248.67,2136.05L1296.6,2136.05L1296.6,2166.86L1344.52,2166.86L1344.52,2197.68L1296.6,2197.68L1296.6,2228.5L1248.67,2228.5L1248.67,2197.68L1200.75,2197.68L1200.75,2166.86L1152.83,2166.86L1152.83,2197.68L1104.9,2197.68L1104.9,2228.5L1056.97,2228.5Z"  fillRule="nonzero"/>
                                </g>
                            </g>
                        </g>
                    </svg> 
            }
        </button>
    );
};

export default RemoveColourButton;