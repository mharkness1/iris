import type { Colour } from "iris-colour";
import { createContext, useState } from "react";

export type ColourContextType = {
    colours: Colour[];
    incrementer: number;
    saveColour: (col: Colour) => void;
    updateColour: (col: Colour, id: string) => void;
    removeColour: (id: string) => void;
};

export const ColourContext = createContext<ColourContextType | null>(null);

const ColourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [colours, setColours] = useState<Colour[]>([]);
    const [incrementer, setIncrementer] = useState<number>(0);

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
        setColours(prev => prev.filter(col => col.name !== id));
    };

    return (
        <ColourContext.Provider value={{ colours, saveColour, updateColour, removeColour, incrementer }}>
            {children}
        </ColourContext.Provider>
    );
};

export { ColourProvider };