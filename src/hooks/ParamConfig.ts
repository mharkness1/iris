export declare const defaultGrayTolerance: number;
export declare const defaultBlackTolerance: number;
export declare const defaultWhiteTolerance: number;
export declare const defaultLightnessSaturationStepSize: number;
export declare const defaultSpectrumSize: number;
export declare const defaultAnalagousAngle: number;
export declare const defaultHueStepSize: number;
export declare const defaultMaxPaletteSize: number;
export declare const defaultBlendFactor: number;

export type ParamConfig = {
  label: string;
  default: number;
  min: number;
  max: number;
};

export const paramConfigs: Record<string, ParamConfig> = {
    grayTolerance: {
        label: "Gray Tolerance",
        default: 15,
        min: 0,
        max: 100,
    },
    blackTolerance: {
        label: "Black Tolerance",
        default: 15,
        min: 0,
        max: 100,
    },
}