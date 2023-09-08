import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import MainContainer from './components/global/MainContainer';
import DataProvider from './components/global/DataProvider';
import LanguageContextProvider from './utility/contextLang';
import ThemeContextProvider from './utility/contextTheme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageContextProvider>
    <ThemeContextProvider>
      <React.StrictMode>
                <BrowserRouter>
                  <MainContainer>
                    <DataProvider>
                    <Header />
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="*" element={<Error />} />
                      </Routes>
                    <Footer />
                    </DataProvider>
                  </MainContainer>
            </BrowserRouter>
      </React.StrictMode>
    </ThemeContextProvider>
  </LanguageContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
