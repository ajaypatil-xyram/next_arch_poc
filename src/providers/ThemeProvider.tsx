'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        const systemPrefersDark = window.matchMedia('(perfers-color-scheme: dark)').matches;

        setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return(<ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>)
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('useTheme must be used within a Provider');
    }
    return context;
}