import React from "react";

type Props = {
    handler: () => void;
}

const ParamToggleButton: React.FC<Props> = ({ handler }) => {
    return(
        <button className="w-12 h-12 ParamToggleButton" onClick={handler}>
            <p className="secondary-col pixel-font text-4xl">@</p>
        </button>
    )
}

export default ParamToggleButton;