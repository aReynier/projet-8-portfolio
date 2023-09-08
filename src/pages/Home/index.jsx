import { React, useEffect, useState, useContext, useRef } from 'react'
import './Home.scss'
import htmlLogo from '../../assets/logos/5847f5bdcef1014c0b5e489c.png'
import cssLogo from '../../assets/logos/CSS3-Logo.png'
import javascriptLogo from '../../assets/logos/javascript_logo.png'
import reactLogo from '../../assets/logos/react_logo.png'
import dataWork from './fetchWork'
import directText from "./../../components/Home/textContent.js"
import { LanguageContext } from '../../utility/contextLang'
import { ThemeContext } from '../../utility/contextTheme';
import { Link } from 'react-scroll';
import introductionVisual from "../../assets/images/clement-helardot-95YRwf6CNw8-unsplash.png"
import HomeWorks from '../../components/Home/HomeWorks'
import ContactAndNetwork from '../../components/Home/ContactAndNetwork'
import temporaryPortrait from '../../assets/images/147967720_704106760256933_8152854818906021614_n.png'
import downloadPdf from '../../assets/icons/illust58-4787-01-01.png'

import dataText from '../../pages/Home/fetchText';
import { AllDataContext } from '../../components/global/DataProvider'

const Home = () => {
    const { allData } = useContext(AllDataContext);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const { language } = useContext(LanguageContext)

    const { theme } = useContext(ThemeContext)

    // const fetchText = async () => {
    //     const workResult = await { allData }

    //     setData(workResult)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchText()
    // }, [])

    // return loading ? (
    //     <p>Loading</p>
    // ) : (
    //     <div>

    //     </div>
    // );

    return  (
        <div className="white__background">
        <div className={`home__container ${ theme === 'dark' && "dark-theme"}`}>
            <div id="home" className='home__introduction'> 
                <div className='home__introduction--content home__introduction--visual'>
                    <div className='home__introduction--square home__introduction--one'></div>
                    <div className='home__introduction--square home__introduction--two'><img src={introductionVisual} /></div>
                    <div className='home__introduction--square home__introduction--three'></div>
                    <div className='home__introduction--square home__introduction--four'></div>
                </div>
                <div className='home__introduction--content home__introduction--text'>
                        <h1>{ allData[language].title }</h1>
                        <button className='home__introduction--button'><Link smooth spy to="contact" className="inactive" activeClass="active">{ allData[language].callToAction }</Link></button>
                </div>
            </div>
            <div id="intro" className='transition__background'>
            </div>
            <div className='home__presentation--background'>
                <div className='home__presentation' >
                    <div className='home__title--container'>
                            <div className='home__title--square-container'>
                                <div className='home__title--square-1'>
                                    <div className='home__title--square-2'></div>
                                </div>
                            </div>
                        <h2 className='home__softwares_title home__title-text'>{ allData[language].headers[1].link }</h2>
                    </div>
                    <div className='home__intro_container'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div className='home__intro_square--container'>
                            <div className='home__intro_square--1'><img src={temporaryPortrait}/></div>
                            <Link className='home__intro_square--2--grid'><img src={downloadPdf}/></Link>
                            </div>
                    </div>
                    <div className='home__software_bigsquare'>
                    <div className='home__software_square'><img src={htmlLogo} alt="logo html"/></div>
                    <div className='home__software_square'><img src={cssLogo} alt="logo css"/></div>
                    <div className='home__software_square'><img src={javascriptLogo} alt="logo javascript"/></div>
                    <div className='home__software_square'><img src={reactLogo} alt="logo react"/></div>
                    <div className='home__software_square'><img src={javascriptLogo} alt="logo javascript"/></div>
                    <div className='home__software_square'><img src={reactLogo} alt="logo react"/></div>
                </div>
                </div>
            </div>
            <div id="works" className='transition__background2'></div>
            <div className='work'>
                <div className='home__title--container' >
                    <div className='home__title--square-container'>
                        <div className='home__title--square-1'>
                            <div className='home__title--square-2'></div>
                        </div>
                    </div>
                    <h2 className='work__title home__title-text'>{ allData[language].headers[2].link }</h2>
                </div>
                <div className='work__square--decor--container'>
                    <div className='work__square--decor'>
                        <div className='work__square--decor-s work__square--decor-s1'></div>
                        <div className='work__square--decor-s work__square--decor-s2'></div>
                        <div className='work__square--decor-s work__square--decor-s3'></div>
                        <div className='work__square--decor-s work__square--decor-s4'></div>
                        <div className='work__square--decor-s work__square--decor-s5'></div>
                        <div className='work__square--decor-s work__square--decor-s6'></div>
                        <div className='work__square--decor-s work__square--decor-s7'></div>
                        <div className='work__square--decor-s work__square--decor-s8'></div>
                        <div className='work__square--decor-s work__square--decor-s9'></div>
                        <div className='work__square--decor-s work__square--decor-s10'></div>
                    </div>
                </div>
               < HomeWorks data={allData} language={language}/>
            </div>
            <div id="contact" className='transition__background contact__transition'></div>
                <div className='background__contact'>
                    <div className='contact'>
                    <div className='home__title--contact' >
                            <div className='home__title--square-container'>
                                <div className='home__title--square-1'>
                                    <div className='home__title--square-2'></div>
                                </div>
                            </div>
                        <h2 className='contact__title home__title-text'>{ allData[language].headers[3].link }</h2>
                        </div>
                        <ContactAndNetwork/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home