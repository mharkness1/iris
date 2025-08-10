import { useState, useContext } from 'react'
import './sidebar.css'
import { type ColourFormat } from '../input/input_main'
import { ColourContext, type ColourContextType } from '../../context/colourContext'
import { getRandomHSL, getRandomHex, getRandomRGB, formatHSLValues, formatRGBValues } from '../input/helpers'
import { createColour, type ColourModes, InputParser } from 'iris-colour'
import HexInput from '../input/hex_input'
import HslInput from '../input/hsl_input'
import RgbInput from '../input/rgb_input'

const AddButton = () => {
    return (
        <button id="sidebar-button-add" className='self-end' type='submit'>
            <svg className="w-5 h-5 text-gray-800 dark:text-white dark:hover:fill-white dark:hover:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
        </button>
    )
}

const RandomButton = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button type="button" id="random_button" onClick={onClick}>
            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"/>
            </svg>
        </button>
    )
}

const useColourTypeInput = () => {
    const [colourType, setColourType] = useState<ColourFormat>("hex");

    const onOptionChange = (event: any) => {
        setColourType(event.target.value);
        console.log("type selected = ", event.target.value);
    };

    return {
    setColourType,
    colourType: colourType,
    renderTypeInput:(
        <select className="text-sm" name="selectedFormat" onChange={onOptionChange} defaultValue="hex">
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
    let rgb: boolean = (colourType === 'rgb')
    let hex: boolean = (colourType === 'hex')
    let hsl: boolean = (colourType === 'hsl')

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
        
        const afterSubmission = (e: any) => {
            e.preventDefault();
            let colInput: string = '';
            if (colourType === 'hex') {
                colInput = e.target[3].value;
            } else if (colourType === 'rgb'){
                colInput = '(' + e.target[3].value + ',' + e.target[4].value + ',' + e.target[5].value + ')';
            } else {
                colInput = '(' + e.target[3].value + ',' + e.target[4].value + '%,' + e.target[5].value + '%)';
            };
            console.log(colInput)
            let col = createColour(InputParser(colInput, colourType as string) as ColourModes, String(incrementer), colourType as string);
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
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
            </svg>
        </button>
        }
        { isAddProcess &&
            <form onSubmit={afterSubmission} className='add-colour-card m-3'>
                <div className='flex flex-row justify-between'>
                    <RandomButton onClick={handleAllRandom} />
                    <AddButton />
                </div>
                <div className='flex flex-row items-center justify-between mx-2 pb-1'>
                    { renderTypeInput }
                    {rgb && 
                    <RgbInput
                    values={rgbValues}
                    onBlurField={handleRGBBlur}
                    onChange={handleRGBChange}
                    containerStyle = { {display: 'flex', gap: '0.5rem', fontSize: '1rem', width:'70%'}}
                    inputWrapperStyle = {{ display: 'flex', alignItems: 'center', width:'80%' }}
                    inputStyle = { {width: '95%', alignItems:'center', fontSize: '0.875rem' }}
                    />
                    }
                    {hsl &&
                    <HslInput
                    values={hslValues}
                    onBlurField={handleHSLBlur}
                    onChange={handleHSLChange}                     
                    containerStyle = { {display: 'flex', gap: '0.2rem', fontSize: '1rem', width:'90%'}}
                    inputWrapperStyle = {{ display: 'flex', alignItems: 'center', width:'100%' }}
                    inputStyle = { {width: '90%', fontSize: '0.875rem' }}/>
                    }
                    {hex &&
                    <HexInput
                    values={hexValues}
                    onChange={handleHexChange}                     
                    containerStyle = { {display: 'flex' ,gap: '0.5rem', fontSize: '1rem', width: '70%'}}
                    inputWrapperStyle = {{ display: 'flex', alignItems: 'center', width:'90%' }}
                    inputStyle = { {width: '75%', fontSize: '0.875rem' }}/>
                    }
                </div>
            </form>
        }
        </>
    )
}

export default AddColourSidebar;