import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

const Error = () => {
  <div className="error__background">
    <h1>Oups! La page que vous demandez n&apos;existe pas.</h1>
    <Link to="/">Retour à la page d&apos;accueil</Link>
  </div>;
};

export default Error;
