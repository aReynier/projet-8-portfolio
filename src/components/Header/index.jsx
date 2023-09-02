import { React, useContext, createContext } from 'react';
import './Header.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import light from '../../../src/assets/icons/8666699_sun_icon.png'
import dark from '../../../src/assets/icons/9025743_moon_icon.png'
import french from '../../../src/assets/icons/french flag.png'
import english from '../../../src/assets/icons/english flag.png'
import PersonalLogo from '../../../src/assets/logos/logo personnel temporaire_Plan de travail 1.png'
import directText from "./../../components/Home/textContent.js"
import { LanguageContext } from '../../utility/contextLang';
import { ThemeContext } from '../../utility/contextTheme';

const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState(false);

    const { switchLanguage, language } = useContext(LanguageContext)
    const { switchTheme, theme } = useContext(ThemeContext)

    //cet élément ne sera finalement peut être pas utilisé
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         //ATTENTION: absolument supprimer cet addEvetnListener
    //         //voir si il y a moyen de le réaliser avec react-scroll
    //         window.addEventListener("scroll", () =>
    //         setHeaderOpacity(window.scrollY > 10)
    //         );
    //     }
    // }, []);

    return (
        // <div className={`header ${headerOpacity ? "header__container" : "header__container transparency" } ${ theme === 'dark' && "dark-theme"}`}>
        <div className={`header header__container ${ theme === 'dark' && "dark-theme"}`}>
            <div className='header__content header__logo'><img src={PersonalLogo} /></div>
                <ul className='header__content header__links'>
                    <div className='link__container'>
                        <li><Link smooth spy to="intro" className="header__link--link inactive" activeClass="active" >
                            <div>{ directText[language].headers.presentation }</div>
                            <div className="test__square" >
                                <div className="test__line"></div>                            
                                <div className="test__carre"></div>
                                <div className="test__line"></div>
                            </div>
                            </Link></li>
                    </div>
                    <div className='link__container'>
                    <li><Link smooth spy to="soft" className="header__link--link inactive" activeClass="active" >
                        <div>{ directText[language].headers.softwares }</div>
                        <div className="test__square" >
                            <div className="test__line"></div>                            
                            <div className="test__carre"></div>
                            <div className="test__line"></div>
                        </div>
                        </Link></li>
                    </div>
                    <div className='link__container'>
                    <li><Link smooth spy to="work" className="header__link--link inactive" activeClass="active">
                        <div>{ directText[language].headers.works }</div>
                        <div className="test__square">
                            <div className="test__line"></div>                            
                            <div className="test__carre"></div>
                            <div className="test__line"></div>
                        </div>
                    </Link></li>
                    </div>
                    <div className='link__container'>
                    <li><Link smooth spy to="contact" className="header__link--link inactive" activeClass="active">
                        <div>{ directText[language].headers.contact }</div>
                        <div className="test__square">
                            <div className="test__line"></div>                            
                            <div className="test__carre"></div>
                            <div className="test__line"></div>
                        </div>
                        </Link></li>
                    </div>
                </ul>
                <div className="header__content">
                <div className="language__super__container">
                    <ul className="language__container">
                        <li className='language__li'><img src={french} /></li>
                        <li className='language__hidden language__li'><div className='link__dark-mode'>
                    <img src={light} />
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
                    <img src={dark} />
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