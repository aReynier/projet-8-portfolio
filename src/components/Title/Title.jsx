import React from 'react';
import './Title.scss';

const Title = (props) => {
  const { title, titleContainerClass, titleHeaderClass } = props;

  return (
    <div className={titleContainerClass}>
      <div className="home__title--square-container">
        <div className="home__title--square-1">
          <div className="home__title--square-2" />
        </div>
      </div>
      <h2 className={`${titleHeaderClass} home__title-text`}>{title}</h2>
    </div>
  );
};

export default Title;
