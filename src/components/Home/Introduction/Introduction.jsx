import { React, Link } from 'react-scroll';
import introductionVisual from '../../../assets/images/image-ordinateur.webp';

const Introduction = (props) => {
  const { data, language } = props;
  return (
    <div id="home" className="home__introduction">
      <div className="home__introduction--content home__introduction--visual">
        <div className="home__introduction--square home__introduction--one" />
        <div className="home__introduction--square home__introduction--two">
          <img src={introductionVisual} alt="computer-with-code" />
        </div>
        <div className="home__introduction--square home__introduction--three" />
        <div className="home__introduction--square home__introduction--four" />
      </div>
      <div className="home__introduction--content home__introduction--text">
        <h1>{data[language].title}</h1>
        <Link
          smooth="true"
          spy
          to="contact"
          className="inactive"
          activeClass="active"
          offset={parseInt(data[language].headers[3].offset, 10)}
        >
          <button className="home__introduction--button" type="button">
            {data[language].callToAction}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
