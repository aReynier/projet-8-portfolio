import { React, useContext } from 'react';
import { UseTheme } from '../../state/useTheme';
import './MainContainer.scss';

const MainContainer = ({ children }) => {
  const { theme } = useContext(UseTheme);

  return (
    <main className={`${theme === 'dark' && 'dark-theme'}`}>
      <div className="pattern">{children}</div>
    </main>
  );
};

export default MainContainer;
