import { createContext } from "react";

export const LocaleContext = createContext(null);

export const useLocale = () => {
    return createContext(LocaleContext);
};
