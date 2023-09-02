import { React, useEffect, useState, useContext } from 'react'
import './Home.scss'
import htmlLogo from '../../assets/logos/5847f5bdcef1014c0b5e489c.png'
import cssLogo from '../../assets/logos/CSS3-Logo.png'
import javascriptLogo from '../../assets/logos/javascript_logo.png'
import reactLogo from '../../assets/logos/react_logo.png'
import dataWork from './fetchWork'
// import { Link } from "react-router-dom"
import directText from "./../../components/Home/textContent.js"
import { LanguageContext } from '../../utility/contextLang'
import { ThemeContext } from '../../utility/contextTheme';
import { Link } from 'react-scroll';
import introductionVisual from "../../assets/images/clement-helardot-95YRwf6CNw8-unsplash.png"
import HomeWorks from '../../components/Home/HomeWorks'

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const { language } = useContext(LanguageContext)

    const { theme } = useContext(ThemeContext)

    const fetchWork = async () => {
        const workResult = await dataWork()

        setData(workResult)
        setLoading(false)
    }

    useEffect(() => {
        fetchWork()
    }, [])

    return loading ? (
        <p>Loading</p>
    ) : (
        
        <div className={`home__container ${ theme === 'dark' && "dark-theme"}`}>
            <div id="intro" className='home__introduction'> 
                <div className='home__introduction--content home__introduction--visual'>
                    <div className='home__introduction--square home__introduction--one'></div>
                    <div className='home__introduction--square home__introduction--two'><img src={introductionVisual} /></div>
                    <div className='home__introduction--square home__introduction--three'></div>
                    <div className='home__introduction--square home__introduction--four'></div>
                </div>
                <div className='home__introduction--content'>
                        {console.log(directText[language].headers.presentation)}
                        <h1>{ directText[language].title }</h1>
                        <button className='home__introduction--button'><Link smooth spy to="contact" className="inactive" activeClass="active">Me contacter</Link></button>
                </div>
            </div>
            <div className='home__softwares' id="soft" >
                <div className='home__title--container' >
                    <div className='home__title--square-container'>
                        <div className='home__title--square-1'>
                            <div className='home__title--square-2'></div>
                        </div>
                    </div>
                    <h2 className='home__softwares_title home__title-text'>{ directText[language].headers.softwares }</h2>
                </div>
                <div className='home__softwares--logos--container'>
                    <div className='home__softwares--logos'><img src={htmlLogo} alt="logo html"/></div>
                    <div className='home__softwares--logos'><img src={cssLogo} alt="logo css"/></div>
                    <div className='home__softwares--logos'><img src={javascriptLogo} alt="logo javascript"/></div>
                    <div className='home__softwares--logos'><img src={reactLogo} alt="logo react"/></div>
                </div>
            </div>
            <div id="work" className='work'>
                <div className='home__title--container' >
                    <div className='home__title--square-container'>
                        <div className='home__title--square-1'>
                            <div className='home__title--square-2'></div>
                        </div>
                    </div>
                    <h2 className='work__title home__title-text'>{ directText[language].headers.works }</h2>
                </div>
               < HomeWorks data={data}/>
            </div>
            <div>réseaux sociaux</div>
            <div id="contact"  className='contact'>
                <h2>{ directText[language].headers.contact }</h2>
                <form>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" id="email" required/>
                    </div>
                    <div>
                        <label htmlFor="object"></label>
                        <input type="text" id="object" required/>
                    </div>
                    <div>
                        <label htmlFor="message"></label>
                        <input type="text" id="message" required/>
                    </div>
                    <div>
                        <input type="submit" value="envoyer"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home