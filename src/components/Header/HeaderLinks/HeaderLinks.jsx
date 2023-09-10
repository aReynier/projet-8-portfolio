import { Link } from 'react-scroll';

const HeaderLinks = props => {
    const { allData, language} = props
    return(
        <ul className='header__content header__links'>
                { allData[language].headers.map((title) => 
                    <div className='link__container' key={title.link}>
                        <li><Link smooth="true" spy to={title.anchor} className="header__link--link inactive" activeClass="active" offset={parseInt(title.offset)} >
                            <div>{ title.link }</div>
                            <div className="test__square" >
                                <div className="test__line"></div>                            
                                <div className="test__carre"></div>
                                <div className="test__line"></div>
                            </div>
                        </Link></li>
                    </div>
                    )
                }
         </ul>
    )
}

export default HeaderLinks;