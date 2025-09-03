import { useState, useContext, useRef, useEffect } from "react";
import { ColourContext, type ColourContextType } from "../../context/colourContext";
import { toCssString, type Colour } from "iris-colour";
import './colour_square.css'

type Props = {
  colour: Colour;
  expanded: boolean;
  onClick: () => void;
};

const PaletteAddButton: React.FC<{colour: Colour}> = ( {colour} ) => {
    const colourContext = useContext(ColourContext)
    const { saveColour } = colourContext as ColourContextType
    const useWhite = (colour.luminance < 0.3 );
    const fillColor = useWhite ? "#ffffff" : "#000000";

    const handleAddPaletteColour = () => {
        saveColour(colour)
    };

    return (
        <button className='items-center self-center' onClick={handleAddPaletteColour}>
            <svg
            className={`h-8 w-8 ${useWhite ? "hover-colour-white" : "hover-colour-black"}`}
            viewBox="0 0 625 625"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
                stroke: fillColor,
                fill: fillColor,
            }}
            >
            <g transform="matrix(1,0,0,1,-992.126,-1708.1)">
                <g transform="matrix(1,0,0,1,354.331,-29.467)">
                    <g transform="matrix(1.32215,0,0,1.32215,-611.484,-760.993)">
                        <path d="M1417.32,1889.76l-0,472.441l-472.441,-0l-0,-472.441l472.441,-0Zm-61.515,30.203l-375.193,0l-0,375.193l375.193,0l-0,-375.193Z"/>
                    </g>
                    <g transform="matrix(1,0,0,1,-232.021,-72.0183)">
                        <path d="M1123.08,2119.82l-64.285,-0l-0,-64.286l64.285,-0l0,-64.286l64.286,0l0,64.286l64.286,-0l-0,64.286l-64.286,-0l0,64.285l-64.286,0l0,-64.285Z" fillRule="nonzero"/>
                    </g>
                </g>
            </g>
            </svg>
        </button>
    )
}

const ColourSquare: React.FC<Props> = ({ colour, expanded, onClick }) => {
    const squareRef = useRef<HTMLDivElement | null>(null);
    const [measuredWidth, setMeasuredWidth] = useState(0);

    const MIN_WIDTH_FOR_INFO = 90;

    const useWhite = (colour.luminance < 0.3 );
    const colourContext = useContext(ColourContext)
    const cssColour = toCssString(colour)
    const isPrimaryColour: boolean = (colourContext?.primaryColour?.rgb === colour?.rgb)

    const inTransitionRef = useRef(false);

    const handleClick = () => {
        inTransitionRef.current = true;
        onClick(); // toggle expanded
    };

    const handleTransitionEnd = () => {
        inTransitionRef.current = false;
    };

    useEffect(() => {
        const checkWidth = () => {
            if(!squareRef.current || inTransitionRef.current) return;
            const width = squareRef.current.offsetWidth;
            if (!expanded) {
                setMeasuredWidth(width)
            }
        }

        requestAnimationFrame(() => requestAnimationFrame(checkWidth));

        const observer = new ResizeObserver(checkWidth);
        if (squareRef.current) observer.observe(squareRef.current);

        window.addEventListener("resize", checkWidth);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", checkWidth);
        };
    }, [expanded]);

    const naturallyWide = measuredWidth >= MIN_WIDTH_FOR_INFO;
    const shouldExpand = expanded && !naturallyWide;
    const showInfo = naturallyWide || expanded;

    return (
        <div ref={squareRef} className={`${shouldExpand ? "colour-square expanded" : "colour-square collapsed"}`} style={{ background: cssColour}} onClick={handleClick} onTransitionEnd={handleTransitionEnd} >
            {showInfo && 
                <div className="flex flex-col justify-between overflow-hidden absolute">
                    <p style={{color: useWhite ? "#ffffff" : "#000000", textDecorationThickness: "4px", textDecoration: isPrimaryColour ? "underline" : "none" }} className="text-center text-[1.5rem]">#{colour.hex.toUpperCase()}</p>
                    <PaletteAddButton colour={colour}/>
                </div>
            }
        </div>
    )
}

export default ColourSquare;