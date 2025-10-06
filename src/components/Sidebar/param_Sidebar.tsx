import ParamToggleButton from './param_Toggle';
import './sidebar.css'
import { useState } from 'react';
import Slider from './hyperparams/sliders';
import { paramConfigs } from '../../hooks/ParamConfig';
import { useParamState } from '../../hooks/ParamState';
import RandomiseParamsButton from './hyperparams/randomParamsButton';
import CopyParamsButton from './hyperparams/copyParamsButton';


const ParamSidebar: React.FC = () => {
    const { params, updateParam } = useParamState();
    const [paramSidebar, setParamSidebar] = useState(true);
    const handleParamSidebar = () => {
        setParamSidebar(!paramSidebar)
    }

    return (
        <div className='sidebar-wrapper param-sidebar-wrapper pt-5 lg:pt-0'>
            <div className={`sidebar gap-3 h-full pb-6 left-0 ${paramSidebar ? 'w-80 border-2 border-r-8 border-b-8 lg:mr-2 open' : 'w-0 border-0 border-r-0 border-b-0 mr-1 closed'}`}>
                <div className="text-center">
                    <p className='hidden lg:block'>&lt;Params /&gt;</p>
                <div className='flex justify-between items-center mx-8 my-2'>
                    <RandomiseParamsButton />
                    <CopyParamsButton />
                </div>
                </div>
                {Object.entries(paramConfigs).map(([key, cfg]) => (
                    <div key={key}>
                        <Slider name={cfg.label.toUpperCase()} maxValue={cfg.max} minValue={cfg.min} value={params[key]} onChange={(val) => updateParam(key, val)}/>
                    </div>
                ))}
            </div>
            <ParamToggleButton handler={handleParamSidebar} />
        </div>
    );
}

export default ParamSidebar;