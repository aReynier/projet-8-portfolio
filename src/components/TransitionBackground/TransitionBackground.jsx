import React from 'react';
import './TransitionBackground.scss';

const TransitionBackground = (props) => {
  const { backgroundClass } = props;
  return <div className={backgroundClass} />;
};

export default TransitionBackground;
