import React from 'react';

import temporaryPortrait from '../../../../assets/images/auto-portrait.webp';
import downloadPdf from '../../../../assets/icons/download-resume-pdf.webp';

import resumeFr from '../../../../assets/files/cv septembre 2024 fr portfolio.pdf';
import resumeEn from '../../../../assets/files/cv septembre 2024 en portfolio.pdf';

const PresentationVisualPdf = (props) => {
  const { language } = props;

  return (
    <div className="home__intro_square--container">
      <div className="home__intro_square--1">
        <img
          width="400"
          height="400"
          src={temporaryPortrait}
          alt="self-portrait"
        />
      </div>
      <a
        className="home__intro_square--2--grid"
        href={language === 'fr' ? resumeFr : resumeEn}
      >
        <img width="115" height="115" src={downloadPdf} alt="pdf-icon" />
      </a>
    </div>
  );
};

export default PresentationVisualPdf;
