import React from 'react';
import './Contact.scss';
import Title from '../../Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactNetwork from './ContactNetwork/ContactNetwork';
import TransitionBackground from '../../TransitionBackground/TransitionBackground';

const Contact = (props) => {
  const { data, language } = props;

  return (
    <div className="up__background__contact" id="contact">
      <TransitionBackground backgroundClass="transition__background" />
      <div className="background__contact">
        <div className="contact">
          <Title
            title={data[language].headers[3].link}
            titleContainerClass="home__title--contact"
            titleHeaderClass="contact__title"
          />
          <div className="split__contact">
            <ContactForm data={data} language={language} />
            <ContactNetwork data={data} language={language} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
