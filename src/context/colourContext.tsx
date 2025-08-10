import type { Colour } from "iris-colour";
import { useEffect, createContext, useState } from "react";
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

const ColourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    console.log("Provider ID:", React.useId());
    

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
        console.log("Before removeColour", { primaryColour, id });

        // Remove the colour from the list
        setColours(prev => prev.filter(col => col.name !== id));
        
    };

    useEffect(() => {
        console.log("primaryColour has been updated:", primaryColour);
    }, [primaryColour]);

    return (
        <ColourContext.Provider value={{ colours, saveColour, updateColour, removeColour, incrementer, primaryColour, setPrimaryColour }}>
            {children}
        </ColourContext.Provider>
    );
};

export { ColourProvider };