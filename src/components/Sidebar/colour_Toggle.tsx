import React from "react";

type Props = {
    handler: () => void;
}

const ColourToggleButton: React.FC<Props> = ({ handler }) => {
    return(
        <button className="lg:w-12 h-12 ColourToggleButton flex justify-center items-center px-1" onClick={handler}>
            <svg
            width="40px"
            height="65%"
            viewBox="0 0 90 83"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            style={{ stroke: "currentColor", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
            >
            <g transform="matrix(1,0,0,1,-497.145,-1716.17)">
                <g transform="matrix(1,0,0,1,-10.729,2.75591)">
                <path d="M507.874,1766.54l0,-33.046l7.12,-0l-0,-5.906l8.267,0l0,-8.267l9.416,-0l0,-5.906l18.931,-0l-0,0.024l15.387,0l0,3.543l10.63,0l0,5.882l10.647,-0l-0,7.147l9.465,-0l-0,18.873l-18.931,0l0,9.437l10.63,0l0,9.425l4.741,-0l0,18.873l-9.465,0l-0,9.437l-17.717,-0l0,0.012l-18.93,-0l-0,-4.7l-12.993,-0l0,-9.449l-9.465,-0l0,-8.292l-9.465,0l-0,-7.087l-8.268,0Zm62.631,-3.519l-10.629,0l-0,4.737l-5.873,-0l0,9.437l11.778,-0l0,-0.013l9.465,0l0,-8.255l-4.741,-0l0,-5.906Z" />
                </g>
            </g>
            </svg>
            <p className="lg:hidden secondary-col pixel-font text-4xl">Colours</p>
        </button>
    )
}

export default ColourToggleButton;