import React from 'react';

import iconMenu from '../../../assets/icons/header menu icon.webp';
import whiteIconMenu from '../../../assets/icons/header menu icon white.webp';
import light from '../../../assets/icons/sun-icon.webp';
import whiteLight from '../../../assets/icons/white-sun-icon.webp';
import dark from '../../../assets/icons/moon-icon.webp';
import whiteDark from '../../../assets/icons/white-moon-icon.webp';

import french from '../../../assets/icons/french flag.webp';
import english from '../../../assets/icons/english flag.webp';
import './HeaderMenu.scss';

const HeaderMenu = (props) => {
  const { data, language, switchLanguage, theme, switchTheme } = props;

  return (
    <div className="header__content">
      <div className="header__menu__container">
        <ul className="header__menu__content">
          <li className="header__menu__list">
            <img
              width="30"
              height="35"
              className="header__menu__top__image"
              src={theme === 'dark' ? whiteIconMenu : iconMenu}
              alt="header-icon-menu"
            />
          </li>
          <li
            className="header__menu--hidden header__menu__list"
            aria-hidden="true"
          >
            <div className="header__menu__list__content">
              <img
                width="30"
                height="30"
                className="header__menu__image"
                src={theme === 'dark' ? whiteLight : light}
                alt="icone soleil"
              />
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={(e) => {
                  switchTheme(e.target.checked ? 'dark' : null);
                }}
                className={`react-switch-checkbox ${theme}`}
                id="header__menu__theme"
              />
              <label
                className="header__menu__label"
                htmlFor="header__menu__theme"
              >
                <p className="header__menu__label--hidden">
                  {data[language].themeLabel}
                </p>
                <span className="header__menu__switch__button" />
              </label>
              <img
                width="30"
                height="30"
                className="header__menu__image"
                src={theme === 'dark' ? whiteDark : dark}
                alt="icone lune"
              />
            </div>
          </li>
          <li className="header__menu--hidden header__menu__list">
            <div className="header__menu__list__content">
              <img
                width="30"
                height="18"
                className="header__menu__image"
                src={french}
                alt="drapeau français"
              />
              <input
                type="checkbox"
                checked={language === 'en'}
                onChange={(f) => {
                  switchLanguage(f.target.checked ? 'en' : 'fr');
                }}
                className={`react-switch-checkbox ${language}`}
                id="header__menu__language"
              />
              <label
                htmlFor="header__menu__language"
                className="header__menu__label"
              >
                <p className="header__menu__label--hidden">
                  {data[language].languageLabel}
                </p>
                <span className="header__menu__switch__button" />
              </label>
              <img
                width="30"
                height="18"
                className="header__menu__image"
                src={english}
                alt="drapeau anglais"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
