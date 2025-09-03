export const defaultGrayTolerance = 10;
export const defaultBlackTolerance = 10;
export const defaultWhiteTolerance = 10;
export const defaultLightnessSaturationStepSize = 10;
export const defaultSpectrumSize = 6;
export const defaultAnalagousAngle = 30;
export const defaultHueStepSize = 60;
export const defaultMaxPaletteSize = 6;
export const defaultBlendFactor = 0.5;


export type ParamConfig = {
  label: string;
  default: number;
  min: number;
  max: number;
};

export const paramConfigs: Record<string, ParamConfig> = {
    analagousAngle: {
        label: "Analagous Angle",
        default: 30,
        min: 10,
        max: 89,
    },
    whiteTolerance: {
        label: "White Tolerance",
        default: 15,
        min: 0,
        max: 30,
    },
    grayTolerance: {
        label: "Gray Tolerance",
        default: 15,
        min: 0,
        max: 30,
    },
    blackTolerance: {
        label: "Black Tolerance",
        default: 15,
        min: 0,
        max: 30,
    },
    maxSize: {
        label: "Max Size",
        default: 6,
        min: 3,
        max: 15,
    },
    stepSize: {
        label: "Step Size - Value",
        default: 10,
        min: 5,
        max: 20,
    },
}