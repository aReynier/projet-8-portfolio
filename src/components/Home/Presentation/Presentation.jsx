import React from 'react';

import temporaryPortrait from '../../../assets/images/auto-portrait.webp';
import downloadPdf from '../../../assets/icons/download-resume-pdf.webp';

import htmlLogo from '../../../assets/logos/5847f5bdcef1014c0b5e489c.png';
import cssLogo from '../../../assets/logos/CSS3-Logo.png';
import javascriptLogo from '../../../assets/logos/javascript_logo.png';
import reactLogo from '../../../assets/logos/react_logo.png';

import resumeFr from '../../../assets/files/cv-reynier-decembre-2022-fr.pdf';
import resumeEn from '../../../assets/files/CV-canada-test-v2-english.pdf';

const Presentation = (props) => {
  const { data, language } = props;
  return (
    <div id="intro" className="home__presentation__bigContainer">
      <div className="transition__background" />
      <div className="home__presentation--background">
        <div className="home__presentation">
          <div className="home__title--container">
            <div className="home__title--square-container">
              <div className="home__title--square-1">
                <div className="home__title--square-2" />
              </div>
            </div>
            <h2 className="home__softwares_title home__title-text">
              {data[language].headers[1].link}
            </h2>
          </div>
          <div className="home__intro_container">
            <div>
              <p>{data[language].presentationText}</p>
              <div className="home__software_bigsquare">
                <div className="home__software_square">
                  <img src={htmlLogo} alt="logo html" />
                </div>
                <div className="home__software_square">
                  <img src={cssLogo} alt="logo css" />
                </div>
                <div className="home__software_square">
                  <img src={javascriptLogo} alt="logo javascript" />
                </div>
                <div className="home__software_square">
                  <img src={reactLogo} alt="logo react" />
                </div>
              </div>
            </div>
            <div className="home__intro_square--container">
              <div className="home__intro_square--1">
                <img src={temporaryPortrait} alt="self-portrait" />
              </div>
              <a
                className="home__intro_square--2--grid"
                href={language === 'fr' ? resumeFr : resumeEn}
              >
                <img src={downloadPdf} alt="pdf-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
