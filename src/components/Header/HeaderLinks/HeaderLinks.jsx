import React from 'react';
import { Link } from 'react-scroll';
import './HeaderLinks.scss';

const HeaderLinks = (props) => {
  const { data, language } = props;
  return (
    <ul className="header__content header__scroll">
      {data[language].headers.map((title) => (
        <div className="header__scroll__container" key={title.link}>
          <li>
            <Link
              smooth="true"
              spy
              to={title.anchor}
              className="header__scroll__link inactive"
              activeClass="active"
              offset={parseInt(title.offset, 10)}
            >
              <div>{title.link}</div>
              <div className="header__scroll__decor">
                <div className="header__scroll__line" />
                <div className="header__scroll__square" />
                <div className="header__scroll__line" />
              </div>
            </Link>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default HeaderLinks;
