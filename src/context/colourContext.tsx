import type { Colour } from "iris-colour";
import { createContext } from "react";
import React from "react";

export type ColourContextType = {
    colours: Colour[];
    incrementer: number;
    saveColour: (col: Colour) => void;
    updateColour: (col: Colour, id: string) => void;
    removeColour: (id: string) => void;
    primaryColour: Colour | null;
    setPrimaryColour: React.Dispatch<React.SetStateAction<Colour | null>>;
};

export const ColourContext = createContext<ColourContextType | null>(null);

