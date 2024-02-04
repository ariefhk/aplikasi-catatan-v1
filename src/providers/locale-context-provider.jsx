import { LocaleContext } from "../contexts/locale-context";
import { useState } from "react";
import PropTypes from "prop-types";

const LocaleContextProvider = ({ children }) => {
    const [locale, setLocale] = useState("id");

    const changeLocale = () => {
        const isId = locale === "id";
        setLocale(isId ? "en" : "id");
    };

    return (
        <LocaleContext.Provider
            value={{
                locale,
                changeLocale,
            }}
        >
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleContextProvider;

LocaleContextProvider.propTypes = {
    children: PropTypes.node,
};
