import { React, useState } from 'react';
import WorksCards from './WorksSubContainer/WorksCards/WorksCards';
import WorksTags from './WorksSubContainer/WorksTags/WorksTags';

const Works = (props) => {
  const { data, language } = props;
  const [selectedTag, setSelectedTag] = useState();

  const squareDecor = [];
  for (let i = 1; i < 11; i += 1) {
    squareDecor.push(`s${i}`);
  }

  return (
    <div id="works" className="work">
      <div className="transition__background2" />
      <div className="home_work__container">
        <div className="work__square--decor--container">
          <div className="work__square--decor">
            {squareDecor.map((square) => (
              <div
                className={`work__square--decor-s work__square--decor-${square}`}
                key={square}
              />
            ))}
          </div>
        </div>
        <div className="home__title--container">
          <div className="home__title--square-container">
            <div className="home__title--square-1">
              <div className="home__title--square-2" />
            </div>
          </div>
          <h2 className="work__title home__title-text">
            {data[language].headers[2].link}
          </h2>
        </div>
        <div className="home__works">
          <WorksTags
            data={data}
            language={language}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
          <WorksCards
            data={data}
            language={language}
            selectedTag={selectedTag}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
