/*
export const defaultGrayTolerance = 10;
export const defaultBlackTolerance = 10;
export const defaultWhiteTolerance = 10;
export const defaultLightnessSaturationStepSize = 10;
export const defaultSpectrumSize = 6;
export const defaultAnalogousAngle = 30;
export const defaultHueStepSize = 60;
export const defaultMaxPaletteSize = 6;
export const defaultBlendFactor = 0.5;
*/

export type ParamConfig = {
  label: string;
  default: number;
  min: number;
  max: number;
  description: string;
};

export const paramConfigs: Record<string, ParamConfig> = {
    analogousAngle: {
        label: "Analogous Angle",
        default: 30,
        min: 10,
        max: 89,
        description: "Variation of hue for analogous colours"
    },
    whiteTolerance: {
        label: "White Tolerance",
        default: 15,
        min: 0,
        max: 30,
        description: "Maximum lightness that can be reached"
    },
    grayTolerance: {
        label: "Gray Tolerance",
        default: 15,
        min: 0,
        max: 30,
        description: "Minimum saturation that can be reached"
    },
    blackTolerance: {
        label: "Black Tolerance",
        default: 15,
        min: 0,
        max: 30,
        description: "Minimum lightness that can be reached"
    },
    maxSize: {
        label: "Max Size",
        default: 6,
        min: 3,
        max: 15,
        description: "Maximum number of colours returned"
    },
    stepSize: {
        label: "Step Size - Value",
        default: 10,
        min: 5,
        max: 20,
        description: "Amount lightness and saturation change each step"
    },
    spectrumSize: {
        label: "Spectrum Size",
        default: 6,
        min: 2,
        max: 15,
        description: "Number of intermediary colours",
    },
}