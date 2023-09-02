import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(null);

    const switchTheme = ( updateTheme ) => {
        setTheme(updateTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;