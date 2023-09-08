import { React, useContext, useState, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-scroll';

import light from '../../../src/assets/icons/8666699_sun_icon.png'
import whiteLight from '../../assets/icons/8666699_sun_icon-02.png'
import dark from '../../../src/assets/icons/9025743_moon_icon.png'
import whiteDark from '../../assets/icons/9025743_moon_icon-02.png'
import iconMenu from '../../assets/icons/header menu icon-01.png'
import whiteIconMenu from '../../assets/icons/header menu icon-02.png'
import french from '../../../src/assets/icons/french flag.png'
import english from '../../../src/assets/icons/english flag.png'
import PersonalLogo from '../../../src/assets/logos/logo personnel temporaire_Plan de travail 1.png'
import whitePersonalLogo from '../../assets/logos/logo temporaire_Plan de travail 1.png'

import directText from '../../components/Home/textContent'
import dataText from '../../pages/Home/fetchText';

import { LanguageContext } from '../../utility/contextLang'
import { ThemeContext } from '../../utility/contextTheme'

import { AllDataContext } from '../../components/global/DataProvider'

const Header = () => {
    const { allData } = useContext(AllDataContext);
    const { switchLanguage, language } = useContext(LanguageContext)
    const { switchTheme, theme } = useContext(ThemeContext)

    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)

    // const fetchText = async () => {
    //     const result = await { allData }

    //     setData(result)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchText()
    // }, [])
    
    return (
        <div className={`header header__container ${ theme === 'dark' && "dark-theme"}`}>
            <div className='header__content header__logo'><Link smooth spy to="home" className="header__link--link inactive" activeClass="active" ><img src={ theme === 'dark' ? whitePersonalLogo : PersonalLogo } /></Link></div>
                <ul className='header__content header__links'>
                { allData[language].headers.map((title) => 
                    <div className='link__container'>
                        <li><Link smooth spy to={title.anchor} className="header__link--link inactive" activeClass="active" offset={parseInt(title.offset)} >
                            <div>{ title.link }</div>
                            <div className="test__square" >
                                <div className="test__line"></div>                            
                                <div className="test__carre"></div>
                                <div className="test__line"></div>
                            </div>
                        </Link></li>
                    </div>
                    )
                }
                </ul>
                <div className="header__content">
                <div className="language__super__container">
                    <ul className="language__container">
                        <li className='language__li'><img src={ theme === 'dark' ? whiteIconMenu : iconMenu } /></li>
                        <li className='language__hidden language__li'><div className='link__dark-mode'>
                    <img src={ theme === 'dark' ? whiteLight : light } />
                            <input 
                                type="checkbox"
                                checked={theme === 'dark'}
                                onChange={(e) => { switchTheme(e.target.checked ? 'dark' : null )}}
                                className={"react-switch-checkbox " + theme}
                                id={`react-switch-new`}
                            />
                            <label className="react-switch-label" htmlFor={`react-switch-new`}>
                                <span className={`react-switch-button`} />
                            </label>
                    <img src={ theme === 'dark' ? whiteDark : dark } />
                </div></li>
                <li className='language__hidden language__li'><div className='link__dark-mode'>
                    <img src={french} />
                            <input 
                                type="checkbox"
                                checked={language === 'en'}
                                onChange={(f) => { switchLanguage(f.target.checked ? 'en' : 'fr' )}}
                                className={"react-switch-checkbox " + language}
                                id={`react-switch-new2`}
                            />
                            <label className="react-switch-label" htmlFor={`react-switch-new2`}>
                                <span className={`react-switch-button`} />
                            </label>
                    <img src={english} />
                </div></li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default Header