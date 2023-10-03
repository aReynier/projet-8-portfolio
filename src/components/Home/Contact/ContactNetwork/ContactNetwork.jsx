import React from 'react';
import { Link } from 'react-router-dom';

import linkedinLogo from '../../../../assets/logos/linkedin-logo-blanc.webp';
import behanceLogo from '../../../../assets/logos/behance.webp';
import downloadPdf from '../../../../assets/icons/download-resume-pdf.webp';
import resumeFr from '../../../../assets/files/cv septembre 2023 fr portfolio.pdf';
import resumeEn from '../../../../assets/files/cv septembre 2023 en portfolio.pdf';
import './ContactNetwork.scss';

const ContactNetwork = (props) => {
  const { data, language } = props;

  return (
    <div className="contact__network split__contact--content">
      <p>{data[language].contact[0].personalName}</p>
      <p>{data[language].contact[0].personalEmail}</p>
      <div className="contact__pdf--container">
        <a
          href={language === 'fr' ? resumeFr : resumeEn}
          download={language === 'fr' ? 'resume-fr.pdf' : 'resume-En.pdf'}
        >
          <div className="contact__network--square contact__pdf--square">
            <img width="63" height="63" src={downloadPdf} alt="pdf-icon" />
          </div>
        </a>
      </div>
      <div className="contact__network--container">
        <Link to="https://www.linkedin.com/in/aurore-reynier-3566a74b/">
          <div className="contact__network--square">
            <img
              width="33"
              height="33"
              src={linkedinLogo}
              alt="logo linkedin"
            />
          </div>
        </Link>
        <Link to="https://www.behance.net/areynier/">
          <div className="contact__network--square">
            <img width="33" height="33" src={behanceLogo} alt="logo behance" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactNetwork;
