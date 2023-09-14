import React from 'react';
import { Link } from 'react-router-dom';
import './WorksCards.scss';

const WorksCards = (props) => {
  const { filteredWorksByTag } = props;

  return (
    <div className="home__works--list">
      {filteredWorksByTag.map((work) => (
        <div className="home__card" key={work.id}>
          <div className="home__card-content">
            <h3>{work.title}</h3>
            <div className="home__card-tag-container">
              <div className="home__card-tag-square" />
              <div className="home__card-tag">{work.tag.join(' - ')}</div>
              <div className="home__card-tag-square" />
            </div>
            <img
              width="450"
              height="215"
              className="home__card-image"
              src={work.imageUrl}
              alt={work.imageAlt}
            />
            <p className="home__card-description">{work.description}</p>
            <ul>
              {work.goals.map((goal) => (
                <li className="home__card-goals" key={goal}>
                  {`✔ ${goal}`}
                </li>
              ))}
            </ul>
            <div className="home__card-button-container">
              {work.urls.map((url) => (
                <Link to={url.url} key={url.url}>
                  <button className="home__card-button" type="button">
                    {url.button}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksCards;
