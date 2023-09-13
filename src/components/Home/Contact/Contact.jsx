import React from 'react';
import ContactAndNetwork from './ContactAndNetwork/ContactAndNetwork';

const Contact = (props) => {
  const { data, language } = props;

  return (
    <div className="up__background__contact">
      <div
        id="contact"
        className="transition__background contact__transition"
      />
      <div className="background__contact">
        <div className="contact">
          <div className="home__title--contact">
            <div className="home__title--square-container">
              <div className="home__title--square-1">
                <div className="home__title--square-2" />
              </div>
            </div>
            <h2 className="contact__title home__title-text">
              {data[language].headers[3].link}
            </h2>
          </div>
          <ContactAndNetwork data={data} language={language} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
