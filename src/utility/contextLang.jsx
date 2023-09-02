import { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');

    const switchLanguage = ( updateLang ) => {
        setLanguage(updateLang);
    }

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;