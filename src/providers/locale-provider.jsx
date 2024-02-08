import { LocaleContext } from '../contexts/locale-context';
import { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

const LocaleContextProvider = ({ children }) => {
    const [locale, setLocale] = useState('id');

    const changeLocale = useCallback(() => {
        const isId = locale === 'id';
        setLocale(isId ? 'en' : 'id');
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
