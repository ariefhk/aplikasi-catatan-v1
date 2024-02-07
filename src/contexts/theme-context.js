import { createContext } from "react";

export const ThemeContext = createContext(null);

export const useTheme = () => {
    return createContext(ThemeContext);
};
