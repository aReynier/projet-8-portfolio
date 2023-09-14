import React from 'react';
import './WorksTags.scss';

const WorksTags = (props) => {
  const { data, language, selectedTag, setSelectedTag, filteredTag } = props;

  return (
    <div className="work__tag">
      <button
        className="work__tag--container"
        onClick={() => setSelectedTag('')}
        type="button"
      >
        <div
          className={`work__tag--square${!selectedTag ? ' selectedTag' : ''}`}
        />
        <div className={`work__tag--tag${!selectedTag ? ' selectedTag' : ''}`}>
          {data[language].workAllTag}
        </div>
        <div
          className={`work__tag--square${!selectedTag ? ' selectedTag' : ''}`}
        />
      </button>
      {filteredTag.map((tag) => (
        <button
          className="work__tag--container"
          onClick={() => setSelectedTag(tag)}
          type="button"
          key={tag}
        >
          <div
            className={`work__tag--square${
              tag === selectedTag ? ' selectedTag' : ''
            }`}
          />
          <div
            className={`work__tag--tag${
              tag === selectedTag ? ' selectedTag' : ''
            }`}
          >
            {tag}
          </div>
          <div
            className={`work__tag--square${
              tag === selectedTag ? ' selectedTag' : ''
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default WorksTags;
