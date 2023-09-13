// supprimer lorsque le code sera bien implémenté

// import { React, useState } from 'react';

// const HomeWorks = (props) => {
//   const { data, language } = props;

//   // Voir si possible de le passer pour les deux composants
//   const [selectedTag, setSelectedTag] = useState();

//   const allTags = [];

//   data[language].workList.map((work) => {
//     work.tag.map((tag) => {
//       allTags.push(tag);
//     });
//   });

//   const filteredTag = allTags.filter(function (elem, pos) {
//     return allTags.indexOf(elem) === pos;
//   });

//   const filteredWorksByTag = selectedTag
//     ? data[language].workList.filter((works) => works.tag.includes(selectedTag))
//     : data[language].workList;

//   return (
//     <Component
//       selectedTag={selectedTag}
//       setSelectedTag={setSelectedTag}
//       filteredTag={filteredTag}
//       filteredWorksByTag={filteredWorksByTag}
//     />
//   );
// };

// export default HomeWorks;
