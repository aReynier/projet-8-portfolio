import { React, useContext } from 'react';
import './Footer.scss';
import { Data } from '../../state/useData';
import { UseLanguage } from '../../state/useLanguage';

const Footer = () => {
  const { data } = useContext(Data);
  const { language } = useContext(UseLanguage);

  return (
    <footer>
      <div>
        <p>{data[language].footer}</p>
        <p className="footer__credit">{data[language].credit}</p>
      </div>
    </footer>
  );
};

export default Footer;
