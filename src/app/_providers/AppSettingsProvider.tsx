"use client"

import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "react-use";

interface AppSettingsContextType {
    theme: string;
    setTheme: (theme: string) => void;
    appLanguage: string;
    setAppLanguage: (language: string) => void;
}

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);

export const AppSettingsProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");
    const [appLanguage, setAppLanguage] = useLocalStorage("systemLanguage", "en-US");

    return (
        <AppSettingsContext.Provider value={{ theme : theme || "dark", setTheme, appLanguage : appLanguage || "en-US", setAppLanguage }}>
            {children}
        </AppSettingsContext.Provider>
    );
};

export const useAppSettings = () => {
    const context = useContext(AppSettingsContext);
    if (!context) {
        throw new Error("useAppSettings must be used within an AppSettingsProvider");
    }
    return context;
};
