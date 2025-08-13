import './palette.css'
import { type Palette } from 'iris-colour'
import ColourSquare from './colour_square'

type Props = {
    palette: Palette
}

const PaletteRender: React.FC<Props> = ({ palette }) => {

    if (palette.type === "Complementary") {
        return (
        <div className='palette-block'>
            <div>{palette.type}</div>
            <div className='palette'>
                <ColourSquare colour={palette.colours[1]}/>
            </div>
        </div>
        )
    } else {
        return (
        <div className='palette-block'>
            <div>{palette.type}</div>
            <div className='palette'>
                {
                    palette.colours.map((colour, index ) => 
                    <ColourSquare colour={colour} key={index}/>
                    )
                }
            </div>
        </div>
        )
}
}

export default PaletteRender