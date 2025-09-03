// CopyParamsButton.tsx
import React, { useState } from "react";
import { useParamState } from "../../../hooks/ParamState";

const CopyParamsButton: React.FC = () => {
  const { params } = useParamState();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Build the string in the requested format
    const text = Object.entries(params)
      .map(([key, value]) => `export const ${key} = ${value};`)
      .join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Hide popup after 1.5s
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="w-8 h-8 secondary-col"
      >
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 473 473"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
                stroke: "currentcolor",
                fill: "currentcolor",
            }}
            >
            <g transform="matrix(1,0,0,1,-944.882,-1889.76)">
                <g>
                <g transform="matrix(0.7,0,0,0.8,283.465,377.953)">
                    <path d="M1417.32,1889.76l-0,472.441l-472.441,-0l-0,-472.441l472.441,-0Zm-66.667,35.433l-370.341,-0l-0,369.315l370.341,1.026l0,-370.341Z" />
                </g>
                <g transform="matrix(0.7,0,0,0.8,425.197,472.441)">
                    <path d="M1417.32,1889.76l-0,472.441l-472.441,-0l-0,-472.441l472.441,-0Zm-66.667,35.433l-370.341,-0l-0,369.315l370.341,1.026l0,-370.341Z" />
                </g>
                </g>
            </g>
            </svg>
      </button>
      {copied && (
        <div className="w-auto absolute left-1/2 -translate-x-1/2 bg-background text-secondary text-xl pixel-text px-2 py-1 shadow border-1 border-secondary border-r-4 border-b-4">
          COPIED JS!
        </div>
      )}
    </div>
  );
};

export default CopyParamsButton;



/*
<svg width="100%" height="100%" viewBox="0 0 473 473" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-944.882,-1889.76)">
        <g>
            <g transform="matrix(0.7,0,0,0.8,283.465,377.953)">
                <path d="M1417.32,1889.76l-0,472.441l-472.441,-0l-0,-472.441l472.441,-0Zm-66.667,35.433l-370.341,-0l-0,369.315l370.341,1.026l0,-370.341Z"/>
            </g>
            <g transform="matrix(0.7,0,0,0.8,425.197,472.441)">
                <path d="M1417.32,1889.76l-0,472.441l-472.441,-0l-0,-472.441l472.441,-0Zm-66.667,35.433l-370.341,-0l-0,369.315l370.341,1.026l0,-370.341Z"/>
            </g>
        </g>
    </g>
</svg>
*/