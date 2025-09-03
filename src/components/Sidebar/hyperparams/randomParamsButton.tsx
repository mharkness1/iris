import React from "react";
import { paramConfigs } from "../../../hooks/ParamConfig";
import { useParamState } from "../../../hooks/ParamState";

const RandomiseParamsButton: React.FC = () => {
  const { updateParam } = useParamState();

  const handleRandomize = () => {
    Object.entries(paramConfigs).forEach(([key, cfg]) => {
      const randomVal = Math.floor(Math.random() * (cfg.max - cfg.min + 1)) + cfg.min;
      updateParam(key, randomVal);
    });
  };

  return (
    <button onClick={handleRandomize}>
            <svg className="w-6 h-6 secondary-col mr-6" width="100%" height="100%" viewBox="0 0 284 284" version="1.1" style={{
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
  );
};

export default RandomiseParamsButton;
