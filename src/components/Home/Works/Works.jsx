import { React, useState } from 'react';
import WorksCards from './WorksCards/WorksCards';
import WorksTags from './WorksTags/WorksTags';
import Title from '../../Title/Title';

import './Works.scss';
import WorksDecor from './WorksDecor/WorksDecor';
import TransitionBackground from '../../TransitionBackground/TransitionBackground';

const Works = (props) => {
  const { data, language } = props;
  const [selectedTag, setSelectedTag] = useState();

  const allTags = [];

  data[language].workList.map((work) =>
    work.tag.map((tag) => allTags.push(tag)),
  );

  const filteredTag = allTags.filter(
    (elem, pos) => allTags.indexOf(elem) === pos,
  );

  const filteredWorksByTag = selectedTag
    ? data[language].workList.filter((works) => works.tag.includes(selectedTag))
    : data[language].workList;

  return (
    <div id="works" className="work">
      <TransitionBackground backgroundClass="transition__background2" />
      <div className="home_work__container">
        <WorksDecor />
        <Title
          title={data[language].headers[2].link}
          titleContainerClass="home__title--container"
          titleHeaderClass="work__title"
        />
        <div className="home__works">
          <WorksTags
            data={data}
            language={language}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            filteredTag={filteredTag}
          />
          <WorksCards filteredWorksByTag={filteredWorksByTag} />
        </div>
      </div>
    </div>
  );
};

export default Works;
