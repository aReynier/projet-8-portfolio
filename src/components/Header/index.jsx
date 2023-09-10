import { React, useContext, useState, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-scroll';



import { LanguageContext } from '../../utility/contextLang'
import { ThemeContext } from '../../utility/contextTheme'

import { AllDataContext } from '../../components/global/DataProvider'
import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderLogoLink from './HeaderLogoLink/HeaderLogoLink';

const Header = () => {
    const { allData } = useContext(AllDataContext);
    const { switchLanguage, language } = useContext(LanguageContext)
    const { switchTheme, theme } = useContext(ThemeContext)

    return (
        <div className={`header header__container ${ theme === 'dark' && "dark-theme"}`}>
                <HeaderLogoLink  theme={theme} />
                <HeaderLinks  allData={allData} language={language}/>
                <HeaderMenu allData={allData} language={language} switchLanguage={switchLanguage} theme={theme} switchTheme={switchTheme}/>
        </div>
    )
}

export default Header