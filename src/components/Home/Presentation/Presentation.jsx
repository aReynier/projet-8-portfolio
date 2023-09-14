import React from 'react';
import Title from '../../Title/Title';

import './Presentation.scss';
import PresentationSoftwares from './PresentationSoftwares/PresentationSoftwares';
import PresentationVisual from './PresentationVIsualPdf/PresentationVisualPdf';
import TransitionBackground from '../../TransitionBackground/TransitionBackground';

const Presentation = (props) => {
  const { data, language } = props;

  return (
    <div id="intro" className="home__presentation__bigContainer">
      <TransitionBackground backgroundClass="transition__background" />
      <div className="home__presentation--background">
        <div className="home__presentation">
          <Title
            title={data[language].headers[1].link}
            titleContainerClass="home__title--container"
            titleHeaderClass="home__softwares_title"
          />
          <div className="home__intro_container">
            <div>
              <p>{data[language].presentationText}</p>
              <PresentationSoftwares />
            </div>
            <PresentationVisual language={language} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
