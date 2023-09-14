import { React } from 'react-scroll';

import './Introduction.scss';
import IntroductionVisual from './IntroductionVisual/IntroductionVisual';
import IntroductionHeader from './IntroductionHeader/IntroductionHeader';

const Introduction = (props) => {
  const { data, language } = props;
  return (
    <div id="home" className="home__introduction">
      <IntroductionVisual />
      <IntroductionHeader data={data} language={language} />
    </div>
  );
};

export default Introduction;
