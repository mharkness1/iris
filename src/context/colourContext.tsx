import type { Colour } from "iris-colour";
import { createContext } from "react";

export type ColourContextType = Colour[];

export const ColourContext = createContext<ColourContextType>([]);
