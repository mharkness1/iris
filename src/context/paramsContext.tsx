import type { Colour } from "iris-colour";
import { createContext } from "react";
import React from "react";

export type ParamsContextType = {
    params: Colour[];
};

export const ParamsContext = createContext<ParamsContextType | null>(null);

