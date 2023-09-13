import { React, createContext, useState } from 'react';

export const UseLanguage = createContext();

const UseLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const switchLanguage = (updateLang) => {
    setLanguage(updateLang);
  };

  return (
    <UseLanguage.Provider value={{ language, switchLanguage }}>
      {children}
    </UseLanguage.Provider>
  );
};

export default UseLanguageProvider;
