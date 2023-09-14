import React from 'react';
import introductionVisual from '../../../../assets/images/image-ordinateur.webp';
import './IntroductionVisual.scss';

const IntroductionVisual = () => (
  <div className="home__introduction--content home__introduction--visual">
    <div className="home__introduction--square home__introduction--one" />
    <div className="home__introduction--square home__introduction--two">
      <img
        width="500"
        height="289"
        src={introductionVisual}
        alt="computer-with-code"
      />
    </div>
    <div className="home__introduction--square home__introduction--three" />
    <div className="home__introduction--square home__introduction--four" />
  </div>
);

export default IntroductionVisual;
