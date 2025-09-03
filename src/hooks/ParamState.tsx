import { useSearchParams } from "react-router-dom";
import { paramConfigs } from "./ParamConfig";

export const useParamState = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const params = Object.fromEntries(
        Object.entries(paramConfigs).map(([key, cfg]) => {
            const val = searchParams.get(key);
            return [key, val ? Number(val) : cfg.default]
        })
    );

    const updateParam = (key: string, value: number) => {
        searchParams.set(key, String(value));
        setSearchParams(searchParams);
    };

    return { params, updateParam };
}