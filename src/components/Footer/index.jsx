import { React, useContext } from 'react'
import './Footer.scss';
import { AllDataContext } from '../../components/global/DataProvider'
import { LanguageContext } from '../../utility/contextLang'

const Footer = () => {
    const { allData } = useContext(AllDataContext);
    const { switchLanguage, language } = useContext(LanguageContext)
    

    return (
        <footer>
                <div>{ allData[language].footer }</div>
        </footer>
    )
}

export default Footer