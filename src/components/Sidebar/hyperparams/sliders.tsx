import React from "react";

// add value indicator next to the slider

type Props = {
    name: string,
    maxValue: number,
}

const slider: React.FC<Props> = ({ name, maxValue }) => {
    const param = name;
    const max = maxValue;

    return (
        <div>
            <label>{param}</label>
            <input type="range" max={max} />
        </div>
    );
}

export default slider;