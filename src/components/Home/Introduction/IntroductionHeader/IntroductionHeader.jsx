import { React, Link } from 'react-scroll';

const IntroductionHeader = (props) => {
  const { data, language } = props;

  return (
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
  );
};

export default IntroductionHeader;
