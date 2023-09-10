import { Link } from "react-router-dom";

import PersonalLogo from '../../../../src/assets/logos/logo personnel temporaire_Plan de travail 1.png'
import whitePersonalLogo from '../../../assets/logos/logo temporaire_Plan de travail 1.png'

const HeaderLogoLink = props => {
    const {theme} = props
    return(
        <div className='header__content header__logo'>
            <Link to="" className="header__link--link" ><img src={ theme === 'dark' ? whitePersonalLogo : PersonalLogo } alt="personal-logo"/></Link>
        </div>
    )
}

export default HeaderLogoLink;