import { ThemeContext } from '../../utility/contextTheme';
import { useContext, useState, useEffect } from "react";

const MainContainer = ({ children }) => {
    const { switchTheme, theme } = useContext(ThemeContext)

    return (
        <main className={`${ theme === 'dark' && "dark-theme"}`}>
            <div className="pattern">
                {children}
            </div>
        </main>
    )
}

export default MainContainer;