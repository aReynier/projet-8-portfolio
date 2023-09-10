import introductionVisual from "../../../assets/images/image-ordinateur.webp"
import { Link } from 'react-scroll';

const Introduction = props => {
    const { allData, language } = props ;
    return(
        <div id="home" className='home__introduction'> 
        <div className='home__introduction--content home__introduction--visual'>
            <div className='home__introduction--square home__introduction--one'></div>
            <div className='home__introduction--square home__introduction--two'><img src={introductionVisual} alt="computer-with-code" /></div>
            <div className='home__introduction--square home__introduction--three'></div>
            <div className='home__introduction--square home__introduction--four'></div>
        </div>
        <div className='home__introduction--content home__introduction--text'>
                <h1>{ allData[language].title }</h1>
                <Link smooth="true" spy to="contact" className="inactive" activeClass="active" offset={parseInt(allData[language].headers[3].offset)}><button className='home__introduction--button'>{ allData[language].callToAction }</button></Link>
        </div>
    </div>
    )
}

export default Introduction;