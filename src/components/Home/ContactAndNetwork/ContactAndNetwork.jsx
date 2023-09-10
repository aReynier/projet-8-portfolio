import { useRef } from "react";
import { Link } from "react-router-dom"
import emailjs from 'emailjs-com'
import linkedinLogo from '../../../assets/logos/linkedin-logo-blanc.png'
import behanceLogo from '../../../assets/logos/behance.png'
import downloadPdf from '../../../assets/icons/download-resume-pdf.webp'
import resumeFr from '../../../assets/files/cv-reynier-decembre-2022-fr.pdf'
import resumeEn from '../../../assets/files/CV-canada-test-v2-english.pdf'


const ContactAndNetwork = props => {
    const {allData, language} = props
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_llh0t9l', 'template_b9vpsjp', form.current, 'n6Xl4-BSosVyGjL_K')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="split__contact">
        <form className="contact__form split__contact--content" ref={form} onSubmit={sendEmail}>
                <label htmlFor="object">{allData[language].contact[0].contactName}</label>
                <input className="contact__form--field" type="text" id="object" name="user_name" required/>
                <label htmlFor="email">{allData[language].contact[0].contactEmail}</label>
                <input className="contact__form--field" type="email" id="email" name="user_email" required/>
                <label htmlFor="message">{allData[language].contact[0].contactMessage}</label>
                <textarea className="contact__form--field" type="text" id="message" name="message" required/>
                <input type="submit" value={allData[language].contact[0].send} className="contact__submit"/>
        </form>
        <div className="contact__network split__contact--content">
            <p>{allData[language].contact[0].personalName}</p>
            <p>{allData[language].contact[0].personalEmail}</p>
            <div className='contact__pdf--container'>
            <a href={language === 'fr' ? resumeFr : resumeEn } download={language === 'fr' ? "resume-fr.pdf" : "resume-En.pdf" }>
                    <div className='contact__network--square contact__pdf--square'>
                        <img src={downloadPdf} alt="pdf-icon" />
                    </div>
                </a>
            </div>
            <div className='contact__network--container'>
                    <Link to="https://www.linkedin.com/in/aurore-reynier-3566a74b/">
                        <div className='contact__network--square'>
                            <img src={linkedinLogo} alt="linkedin-logo" />
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/areynier/">
                        <div className='contact__network--square'>
                            <img src={behanceLogo} alt="behance-logo" />
                        </div>
                    </Link>
            </div>
        </div>
    </div>
    )
}

export default ContactAndNetwork;