import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';
import { UseLanguage } from '../../state/useLanguage';
import { Data } from '../../state/useData';

const Error = () => {
  const { data } = useContext(Data);
  const { language } = useContext(UseLanguage);

  return (
    <div className="error__background">
      <div className="error__container">
        <h1>{data[language].errorStatement}</h1>
        <Link to="/">{data[language].errorLink}</Link>
      </div>
    </div>
  );
};

export default Error;
