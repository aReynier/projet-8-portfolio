import { React, createContext, useState } from 'react';

export const UseTheme = createContext();

const UseThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  const switchTheme = (updateTheme) => {
    setTheme(updateTheme);
  };

  return (
    <UseTheme.Provider value={{ theme, switchTheme }}>
      {children}
    </UseTheme.Provider>
  );
};

export default UseThemeProvider;
