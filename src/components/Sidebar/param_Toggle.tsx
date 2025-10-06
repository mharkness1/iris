import React from "react";

type Props = {
    handler: () => void;
}

const ParamToggleButton: React.FC<Props> = ({ handler }) => {
    return(
        <button className="w-auto lg:w-12 h-12 ParamToggleButton hover:bg-hover" onClick={handler}>
            <p className="secondary-col pixel-font text-4xl px-1">@<span className="lg:hidden">Params</span></p>
        </button>
    )
}

export default ParamToggleButton;