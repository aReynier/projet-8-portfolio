import { useRef } from "react";
import { Link } from "react-router-dom"
import emailjs from 'emailjs-com'
import linkedinLogo from '../../assets/logos/linkedin-logo.png'
import behanceLogo from '../../assets/logos/behance.png'
import downloadPdf from '../../assets/icons/illust58-4787-01-01.png'

const ContactAndNetwork = () => {
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
        <div>
                <label htmlFor="object"></label>
                <input type="text" id="object" placeholder='Nom' name="user_name" required/>
            </div>
            <div>
                <label htmlFor="email"></label>
                <input type="email" id="email" name="user_email" placeholder='Email' required/>
            </div>
            <div>
                <label htmlFor="message"></label>
                <textarea type="text" id="message" name="message" required/>
            </div>
            <div>
                <input type="submit" value="envoyer" className="contact__submit"/>
            </div>
        </form>
        <div className="contact__network split__contact--content">
            <p>Aurore reynier</p>
            <p>aurore.reynier@gmail.com</p>
            <div className='contact__pdf--container'>
                <Link to="https://www.linkedin.com/in/aurore-reynier-3566a74b/">
                    <div className='contact__network--square contact__pdf--square'>
                        <img src={downloadPdf} />
                    </div>
                </Link>
            </div>
            <div className='contact__network--container'>
                    <Link to="https://www.linkedin.com/in/aurore-reynier-3566a74b/">
                        <div className='contact__network--square'>
                            <img src={linkedinLogo} />
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/areynier/">
                        <div className='contact__network--square'>
                            <img src={behanceLogo} />
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/areynier/">
                        <div className='contact__network--square'>
                            <img src={behanceLogo} />
                        </div>
                    </Link>
            </div>
        </div>
    </div>
    )
}

export default ContactAndNetwork;