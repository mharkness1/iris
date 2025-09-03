import { useSearchParams } from "react-router-dom";
import { paramConfigs } from "./ParamConfig";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const useParamState = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const params = Object.fromEntries(
        Object.entries(paramConfigs).map(([key, cfg]) => {
            const val = searchParams.get(key);
            const num = val ? Number(val) : cfg.default;
            return [key, clamp(num, cfg.min, cfg.max)]
        })
    );

    const updateParam = (key: string, value: number) => {
        const cfg = paramConfigs[key];
        const clamped = clamp(value, cfg.min, cfg.max);
        searchParams.set(key, String(clamped));
        setSearchParams(searchParams);
    };

    return { params, updateParam };
}