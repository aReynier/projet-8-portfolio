import { React, useContext } from 'react';
import './Header.scss';

import { UseLanguage } from '../../state/useLanguage';
import { UseTheme } from '../../state/useTheme';
import { Data } from '../../state/useData';

import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderLogoLink from './HeaderLogoLink/HeaderLogoLink';

const Header = () => {
  const { data } = useContext(Data);
  const { switchLanguage, language } = useContext(UseLanguage);
  const { switchTheme, theme } = useContext(UseTheme);

  return (
    <div className="header__container">
      <HeaderLogoLink theme={theme} />
      <HeaderLinks data={data} language={language} />
      <HeaderMenu
        data={data}
        language={language}
        switchLanguage={switchLanguage}
        theme={theme}
        switchTheme={switchTheme}
      />
    </div>
  );
};

export default Header;
