import ParamToggleButton from './param_Toggle';
import './sidebar.css'
import { useState } from 'react';


const ParamSidebar: React.FC = () => {
    const [paramSidebar, setParamSidebar] = useState(true);
    const handleParamSidebar = () => {
        setParamSidebar(!paramSidebar)
    }

    return (
        <div className='sidebar-wrapper h-full'>
            <div className={`sidebar h-full left-0 ${paramSidebar ? 'w-80 border-2 border-r-8 border-b-8 mr-2 open' : 'w-0 border-0 border-r-0 border-b-0 mr-1 closed'}`}>
                <div className="text-center">
                    <p>&lt;Params /&gt;</p>
                </div>
            </div>
            <ParamToggleButton handler={handleParamSidebar} />
        </div>
    );
}

export default ParamSidebar;