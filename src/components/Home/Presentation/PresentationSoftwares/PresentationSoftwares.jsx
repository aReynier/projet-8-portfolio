import React from 'react';

import htmlLogo from '../../../../assets/logos/html-logo.webp';
import cssLogo from '../../../../assets/logos/CSS3-Logo.webp';
import javascriptLogo from '../../../../assets/logos/javascript_logo.webp';
import reactLogo from '../../../../assets/logos/react-logo.webp';

const PresentationSoftwares = () => (
  <div className="home__software_bigsquare">
    <div className="home__software_square">
      <img width="56" height="56" src={htmlLogo} alt="logo html" />
    </div>
    <div className="home__software_square">
      <img width="39" height="56" src={cssLogo} alt="logo css" />
    </div>
    <div className="home__software_square">
      <img width="40" height="56" src={javascriptLogo} alt="logo javascript" />
    </div>
    <div className="home__software_square">
      <img width="56" height="56" src={reactLogo} alt="logo react" />
    </div>
  </div>
);

export default PresentationSoftwares;
