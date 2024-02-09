import { LocaleContext } from '../contexts/locale-context';
import { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getStorageData, saveStorageData } from '../utils/local-storage';

const LocaleContextProvider = ({ children }) => {
    const [locale, setLocale] = useState(getStorageData('locale') || 'id');

    const changeLocale = useCallback(() => {
        const isId = locale === 'id';

        if (isId) {
            saveStorageData('locale', 'en');
            return setLocale('en');
        } else {
            saveStorageData('locale', 'id');
            return setLocale('id');
        }
    }, [locale]);

    // Memoized value of the locale context
    const localeContextValue = useMemo(
        () => ({
            locale,
            changeLocale,
        }),
        [locale, changeLocale],
    );

    return <LocaleContext.Provider value={localeContextValue}>{children}</LocaleContext.Provider>;
};

export default LocaleContextProvider;

LocaleContextProvider.propTypes = {
    children: PropTypes.node,
};
