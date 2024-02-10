import { useState, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/theme-context';
import { getStorageData, saveStorageData } from '../utils/local-storage';

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getStorageData('theme') || 'light');

    const changeTheme = useCallback(() => {
        const isLight = theme === 'light';
        if (isLight) {
            saveStorageData('theme', 'dark');
            return setTheme('dark');
        } else {
            saveStorageData('theme', 'light');
            return setTheme('light');
        }
    }, [theme]);

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        theme === 'dark' ? bodyClass.add(className) : bodyClass.remove(className);
    }, [theme]);

    // Memoized value of the theme context
    const themeContextValue = useMemo(
        () => ({
            theme,
            changeTheme,
        }),
        [theme, changeTheme],
    );

    return <ThemeContext.Provider value={themeContextValue}> {children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;

ThemeContextProvider.propTypes = {
    children: PropTypes.node,
};
