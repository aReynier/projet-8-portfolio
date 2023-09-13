import { React, useContext } from 'react';
import './Home.scss';

import { UseLanguage } from '../../state/useLanguage';
import { Data } from '../../state/useData';

import Introduction from '../../components/Home/Introduction/Introduction';
import Presentation from '../../components/Home/Presentation/Presentation';
import Works from '../../components/Home/Works/Works';
import Contact from '../../components/Home/Contact/Contact';

const Home = () => {
  const { data } = useContext(Data);
  const { language } = useContext(UseLanguage);

  return (
    <div className="home__container">
      <Introduction data={data} language={language} />
      <Presentation data={data} language={language} />
      <Works data={data} language={language} />
      <Contact data={data} language={language} />
    </div>
  );
};

export default Home;
