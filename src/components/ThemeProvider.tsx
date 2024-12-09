'use client';
import { createContext, useContext } from 'react';

type Theme = {
  colours: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colours: {
    primary: '#23aac9',
    secondary: '#f4f4f4',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
