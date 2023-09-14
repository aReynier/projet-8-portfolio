import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLogoLink.scss';

import PersonalLogo from '../../../assets/logos/black_personal-logo.webp';
import whitePersonalLogo from '../../../assets/logos/white-personal-logo.webp';

const HeaderLogoLink = (props) => {
  const { theme } = props;
  return (
    <div className="header__content header__logo">
      <Link to="/" className="header__logo__link">
        <img
          width="40"
          height="29"
          className="header__logo__image"
          src={theme === 'dark' ? whitePersonalLogo : PersonalLogo}
          alt="logo Aurore Reynier"
        />
      </Link>
    </div>
  );
};

export default HeaderLogoLink;
