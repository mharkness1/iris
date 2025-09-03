import React from "react";
import './slider.css'

// add value indicator next to the slider

type Props = {
    name: string,
    maxValue: number,
    minValue: number,
    value: number,
    onChange: (value: number) => void;
}

const Slider: React.FC<Props> = ({ name, maxValue, minValue, value, onChange }) => {
    const param = name;
    const max = maxValue;
    const min = minValue

    return (
        <div className="w-10/12 flex flex-col mx-auto">
            <div className="flex justify-between pb-1">
                <label className="text-xl">{param.toUpperCase()}</label>
                <label className="text-xl">{value}</label>
            </div>
            <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))}/>
        </div>
    );
}

export default Slider;