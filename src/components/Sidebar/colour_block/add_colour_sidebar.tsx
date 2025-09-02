import { useState, useContext } from 'react'
import '../sidebar.css'
import { type ColourFormat } from '../../input/input_main'
import { ColourContext, type ColourContextType } from '../../../context/colourContext'
import { getRandomHSL, getRandomHex, getRandomRGB, formatHSLValues, formatRGBValues } from '../../input/helpers'
import { createColour, type ColourModes, InputParser } from 'iris-colour'
import HexInput from '../../input/hex_input'
import HslInput from '../../input/hsl_input'
import RgbInput from '../../input/rgb_input'

const AddButton = () => {
    return (
        <button id="sidebar-button-add" className='self-end' type='submit'>
            <svg
            className="secondary-col h-6 w-6 hover:bg-hover"
            viewBox="0 0 625 625"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
                stroke: "currentcolor",
                fill: "currentcolor",
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

const RandomButton = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button type="button" id="random_button" onClick={onClick}>
            <svg className="w-4 h-4 secondary-col" width="100%" height="100%" viewBox="0 0 284 284" version="1.1" style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
                stroke: "currentcolor",
                fill: "currentcolor",
                }}
                >
                <g transform="matrix(1,0,0,1,-897.638,-1866.14)">
                    <g>
                        <path d="M1074.8,2043.31l35.433,0l0,17.717l17.717,-0l-0,17.716l17.716,0l0,-35.433l35.433,0l0,106.299l-106.299,0l0,-35.433l35.433,0l0,-17.716l-17.716,-0l-0,-17.717l-17.717,0l0,-35.433Z"/>
                        <path d="M915.354,1866.14l17.717,-0l-0,17.716l17.716,0l0,17.717l17.717,-0l-0,17.716l17.716,0l0,17.717l17.717,-0l0,35.433l-35.433,-0l-0,-17.717l-17.717,0l0,-17.716l-17.716,-0l-0,-17.717l-17.717,0l0,-17.716l-17.716,-0l-0,-17.717l17.716,0l0,-17.716Z"/>
                        <path d="M1092.52,1937.01l-0,-17.717l17.716,0l0,-17.716l-35.433,-0l0,-35.433l106.299,-0l0,106.299l-35.433,-0l0,-35.433l-17.716,-0l-0,17.716l-17.717,0l0,17.717l-17.716,-0l-0,17.716l-17.717,0l0,17.717l-17.716,0l-0,17.717l-17.717,-0l0,17.716l-17.716,0l-0,17.717l-17.717,-0l0,17.716l-17.717,0l0,17.717l-17.716,-0l-0,17.716l-17.717,0l0,17.717l-17.716,-0l-0,17.716l-17.717,0l0,-17.716l-17.716,-0l-0,-17.717l17.716,0l0,-17.716l17.717,-0l-0,-17.717l17.716,0l0,-17.716l17.717,-0l-0,-17.717l17.716,0l0,-17.716l17.717,-0l0,-17.717l17.717,0l-0,-17.717l17.716,0l0,-17.716l17.717,-0l-0,-17.717l17.716,0l0,-17.716l17.717,-0Z"/>
                    </g>
                </g>
            </svg>
        </button>
    )
}

const useColourTypeInput = () => {
    const [colourType, setColourType] = useState<ColourFormat>("hex");

    const onOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColourType(event.target.value as ColourFormat);
        console.log("type selected = ", event.target.value);
    };

    return {
    setColourType,
    colourType: colourType,
    renderTypeInput:(
        <select className="text-[1.5rem]" name="selectedFormat" onChange={onOptionChange} defaultValue="hex">
            <option value="hex">hex</option>
            <option value="rgb">rgb</option>
            <option value="hsl">hsl</option>
        </select>
        )
    }
}


const AddColourSidebar: React.FC = () => {
    const { colourType, renderTypeInput, setColourType } = useColourTypeInput();
    const [isAddProcess, setAddProcess] = useState<boolean>(false);
    const [rgbValues, setRgbValues] = useState<[string, string, string]>(['', '', '']);
    const [hslValues, setHslValues] = useState<[string, string, string]>(['','','']);
    const [hexValues, setHexValues] = useState<string>('');
    const colContext = useContext(ColourContext)
    const { saveColour, incrementer } = colContext as ColourContextType
    const rgb: boolean = (colourType === 'rgb')
    const hex: boolean = (colourType === 'hex')
    const hsl: boolean = (colourType === 'hsl')

    const handleAddSidebar = () => {
        setAddProcess(true)
    };

    const handleHSLChange = (newValues: [string, string, string]) => {
            setHslValues(newValues);
        }
    
        const handleHSLBlur = (index: number, rawValue: string) => {
            const padded = formatHSLValues(index, rawValue);
            const updated = [...hslValues] as [string, string, string];
            updated[index] = padded;
            setHslValues(updated);
        }
    
        const handleRandomHexClick = () => {
            const newColour = getRandomHex();
            setHexValues(newColour);
        }
    
        const handleRandomRGBClick = () => {
            const newColour = getRandomRGB();
            setRgbValues(newColour);
        }
    
        const handleRandomHSLClick = () => {
            const newColour = getRandomHSL();
            setHslValues(newColour);
        }

        const handleAllRandom = () => {
            switch(colourType) {
                case "hex":
                    handleRandomHexClick();
                    break;
                case "hsl":
                    handleRandomHSLClick();
                    break;
                case "rgb":
                    handleRandomRGBClick();
                    break;
            }
        }
    
        const handleHexChange = (newValue: string) => {
            console.log("Updating hex state to", newValue);
            setHexValues(newValue);
        }
    
        const handleRGBChange = (newValues: [string, string, string]) => {
            setRgbValues(newValues);
        }
    
        const handleRGBBlur = (index: number, rawValue: string) => {
            const padded = formatRGBValues(rawValue);
            const updated = [...rgbValues] as [string, string, string];
            updated[index] = padded;
            setRgbValues(updated);
        };
        
        const afterSubmission = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const form = e.currentTarget;
            const elements = form.elements as HTMLFormControlsCollection;

            let colInput = "";
            if (colourType === "hex") {
                colInput = (elements[3] as HTMLInputElement).value;
            } else if (colourType === "rgb") {
                colInput =
                "(" +
                (elements[3] as HTMLInputElement).value +
                "," +
                (elements[4] as HTMLInputElement).value +
                "," +
                (elements[5] as HTMLInputElement).value +
                ")";
            } else {
                colInput =
                "(" +
                (elements[3] as HTMLInputElement).value +
                "," +
                (elements[4] as HTMLInputElement).value +
                "%," +
                (elements[5] as HTMLInputElement).value +
                "%)";
            }
            console.log(colInput)
            const col = createColour(InputParser(colInput, colourType as string) as ColourModes, String(incrementer), colourType as string);
            saveColour(col);
            setAddProcess(false);
            setRgbValues(['','','']);
            setHexValues('');
            setHslValues(['','','']);
            setColourType("hex");
        }


    return(
        <>
        { !isAddProcess &&
        <button className='add-colour-button items-center' onClick={handleAddSidebar}>
            <svg
            className="secondary-col h-10 w-10 hover:bg-hover"
            viewBox="0 0 625 625"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
                stroke: "currentcolor",
                fill: "currentcolor",
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
        }
        { isAddProcess &&
            <form onSubmit={afterSubmission} className='add-colour-card m-3'>
                <div className='flex flex-row justify-between'>
                    <RandomButton onClick={handleAllRandom} />
                    { renderTypeInput }
                    <AddButton />
                </div>
                <div className='flex flex-row items-center justify-between mx-2 pb-1'>
                    {rgb && 
                    <RgbInput
                    values={rgbValues}
                    onBlurField={handleRGBBlur}
                    onChange={handleRGBChange}
                    containerStyle = { {display: 'flex', gap: '0.1rem', fontSize: '1.8rem', width:'100%'}}
                    inputWrapperStyle = {{ display: 'flex', alignItems: 'center', marginInline: 'auto', gap:'0rem' }}
                    inputStyle = { { width:'100%', alignItems:'center', fontSize: '1.8rem', paddingInline:'0.3rem', flexGrow:'1' }}
                    />
                    }
                    {hsl &&
                    <HslInput
                    values={hslValues}
                    onBlurField={handleHSLBlur}
                    onChange={handleHSLChange}                     
                    containerStyle = { {display: 'flex', gap: '0.05rem', fontSize: '1.5rem', width:'100%'}}
                    inputWrapperStyle = {{ display: 'flex', alignItems: 'center', width:'100%', gap: '0.05rem', flexGrow: '1'}}
                    inputStyle = { {width: '100%', fontSize: '1.6rem'}}/>
                    }
                    {hex &&
                    <HexInput
                    values={hexValues}
                    onChange={handleHexChange}                     
                    containerStyle = { {display: 'flex' ,gap: '0rem', fontSize: '1.7rem', width: 'auto', alignItems: "center", marginLeft: "1.9rem"} }
                    inputWrapperStyle = {{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent:'center', width:'auto' }}
                    inputStyle = { {width: '80%', fontSize: '1.7rem' }}/>
                    }
                </div>
            </form>
        }
        </>
    )
}

export default AddColourSidebar;