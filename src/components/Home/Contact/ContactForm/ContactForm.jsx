import { React, useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.scss';

const ContactForm = (props) => {
  const [send, setSend] = useState(false);
  const form = useRef();

  const { data, language } = props;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_llh0t9l',
        'template_b9vpsjp',
        form.current,
        'n6Xl4-BSosVyGjL_K',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    form.current.reset();
    setSend(true);
  };

  useEffect(() => {
    let timeout;
    if (send) {
      timeout = setTimeout(() => setSend(false), 1500);
    }
    return () => clearTimeout(timeout);
  }, [send]);

  return (
    <form
      className="contact__form split__contact--content"
      ref={form}
      onSubmit={sendEmail}
    >
      <label htmlFor="object">{data[language].contact[0].contactName}</label>
      <input
        className="contact__form--field"
        type="text"
        id="object"
        name="user_name"
        required
        autoComplete="username"
        placeholder={data[language].contact[0].contactNamePlaceholder}
      />
      <label htmlFor="email">{data[language].contact[0].contactEmail}</label>
      <input
        className="contact__form--field"
        type="email"
        id="email"
        name="user_email"
        required
        autoComplete="email"
        placeholder={data[language].contact[0].contactEmailPlaceholder}
      />
      <label htmlFor="message">
        {data[language].contact[0].contactMessage}
      </label>
      <textarea
        className="contact__form--field"
        type="text"
        id="message"
        name="message"
        required
        placeholder={data[language].contact[0].contactMessagePlaceholder}
      />
      <input
        type="submit"
        value={data[language].contact[0].send}
        className="contact__submit"
      />
      <div className={`contact__form--null ${send && 'contact__form--sent'}`}>
        Message envoyé
      </div>
    </form>
  );
};

export default ContactForm;
