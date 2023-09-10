import { React, useContext } from 'react'
import './Home.scss'

import { LanguageContext } from '../../utility/contextLang'
import { ThemeContext } from '../../utility/contextTheme'
import { AllDataContext } from '../../components/global/DataProvider'

import Introduction from '../../components/Home/Introduction/Introduction'
import Presentation from '../../components/Home/Presentation/Presentation'
import Works from '../../components/Home/Works/Works'
import Contact from '../../components/Home/Contact/Contact'

const Home = () => {
    const { allData } = useContext(AllDataContext);
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    return  (
        <div className={`home__container ${ theme === 'dark' && "dark-theme"}`}>
            < Introduction allData={allData} language={language}/>
            < Presentation allData={allData} language={language}/>
            < Works allData={allData} language={language}/>
            < Contact allData={allData} language={language}/>
        </div>
    )
}

export default Home