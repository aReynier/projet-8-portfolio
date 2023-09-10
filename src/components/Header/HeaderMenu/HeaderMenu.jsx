import iconMenu from '../../../assets/icons/header menu icon-03.webp'
import whiteIconMenu from '../../../assets/icons/header menu icon white-03.webp'
import light from '../../../../src/assets/icons/8666699_sun_icon.png'
import whiteLight from '../../../assets/icons/8666699_sun_icon-02.png'
import dark from '../../../../src/assets/icons/9025743_moon_icon.png'
import whiteDark from '../../../assets/icons/9025743_moon_icon-02.png'


import french from '../../../../src/assets/icons/french flag.png'
import english from '../../../../src/assets/icons/english flag.png'


const HeaderMenu = props => {
    const {language, switchLanguage, theme, switchTheme} = props

return (<div className="header__content" aria-hidden="true">
<div className="language__super__container">
<ul className="language__container">
    <li className='language__li'><img src={ theme === 'dark' ? whiteIconMenu : iconMenu } alt="header-icon-menu"/></li>
    <li className='language__hidden language__li'><div className='link__dark-mode'>
    <img src={ theme === 'dark' ? whiteLight : light } alt="sun-icon"/>
        <input 
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => { switchTheme(e.target.checked ? 'dark' : null )}}
            className={"react-switch-checkbox " + theme}
            id={`react-switch-new`}
        />
        <label className="react-switch-label" htmlFor={`react-switch-new`}>
            <p>theme</p>
            <span className={`react-switch-button`} />
        </label>
<img src={ theme === 'dark' ? whiteDark : dark }  alt="moon-icon" />
</div></li>
<li className='language__hidden language__li'><div className='link__dark-mode'>
<img src={french}  alt="french-flag"/>
        <input 
            type="checkbox"
            checked={language === 'en'}
            onChange={(f) => { switchLanguage(f.target.checked ? 'en' : 'fr' )}}
            className={"react-switch-checkbox " + language}
            id={`react-switch-new2`}
        />
        <label className="react-switch-label" htmlFor={`react-switch-new2`}>
            <p>language</p>
            <span className={`react-switch-button`} />
        </label>
<img src={english} alt="english-flag" />
</div></li>
</ul>
</div>
</div>  )
}

export default HeaderMenu