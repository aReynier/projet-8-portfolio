import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error/index';
import MainContainer from './components/MainContainer/MainContainer';
import DataProvider from './state/useData';
import UseThemeProvider from './state/useTheme';
import UseLanguageProvider from './state/useLanguage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UseLanguageProvider>
    <UseThemeProvider>
      <DataProvider>
        <React.StrictMode>
          <BrowserRouter>
            <MainContainer>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/404" element={<Error />} />
                <Route path="*" element={<Error />} />
              </Routes>
              <Footer />
            </MainContainer>
          </BrowserRouter>
        </React.StrictMode>
      </DataProvider>
    </UseThemeProvider>
  </UseLanguageProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
