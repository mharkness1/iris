import type { Colour } from "iris-colour";
import { useState } from "react";
import React from "react";
import { ColourContext } from "./colourContext";

const ColourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [colours, setColours] = useState<Colour[]>([]);
    const [incrementer, setIncrementer] = useState<number>(0);
    const [primaryColour, setPrimaryColour] = useState<Colour | null>(null);

    const handleIncrementer = () => {
        setIncrementer(incrementer + 1)
    }

    const saveColour = (col: Colour) => {
        setColours(prev => [...prev, col]);
        handleIncrementer();
    };

    const updateColour = (updated: Colour, id: string) => {
        setColours(prev => prev.map(col => col.name === id ? updated : col))
    };

    const removeColour = (id: string) => {
        // Remove the colour from the list
        setColours(prev => prev.filter(col => col.name !== id));
        
        // If removed colour is the primary, reset the primary
        if (primaryColour?.name === id) {
            setPrimaryColour(null);
        }
    };

    return (
        <ColourContext.Provider value={{ colours, saveColour, updateColour, removeColour, incrementer, primaryColour, setPrimaryColour }}>
            {children}
        </ColourContext.Provider>
    );
};

export { ColourProvider };