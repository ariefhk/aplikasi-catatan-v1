import { useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/theme-context";
import { getStorageData, saveStorageData } from "../utils/local-storage";

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getStorageData("theme") || "light");

    const changeTheme = () => {
        const isLight = theme === "light";
        if (isLight) {
            saveStorageData("theme", "dark");
            return setTheme("dark");
        } else {
            saveStorageData("theme", "light");
            return setTheme("light");
        }
    };

    return <ThemeContext.Provider value={{ theme, changeTheme }}> {children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;

ThemeContextProvider.propTypes = {
    children: PropTypes.node,
};
