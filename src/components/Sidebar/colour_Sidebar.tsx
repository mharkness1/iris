import { useContext, useState } from 'react';
import ColourToggleButton from './colour_Toggle';
import './sidebar.css'
import { ColourContext } from '../../context/colourContext';
import ColourBlock from './colour_block/colour_block';
import AddColourSidebar from './colour_block/add_colour_sidebar';


const ColourSidebar: React.FC = () => {
    const [colourSidebar, setColourSidebar] = useState(true);
    const handleColourSidebar = () => {
        setColourSidebar(!colourSidebar)
    }

    const colourContext = useContext(ColourContext)
    const colourList = colourContext?.colours;


    return (
        <div className='sidebar-wrapper'>
            <ColourToggleButton handler={ handleColourSidebar }/>
            <div className={`sidebar h-full ml-0 right-0 ${colourSidebar ? 'lg:w-60 w-80 border-2 border-r-8 border-b-8 lg:ml-2 open' : 'w-0 border-0 border-r-0 border-b-0 lg:ml-1 closed'}`}>
                <div className="hidden lg:block text-center">
                    <p>&lt;Colours /&gt;</p>
                </div>
                <div className='colour-list'>
                    {colourList?.map((col) => (
                            <ColourBlock key={col.name} colour={col}/>
                    ))}
                    <AddColourSidebar />
                </div>
            </div>
        </div>
    );
}

export default ColourSidebar;