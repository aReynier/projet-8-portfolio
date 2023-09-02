import React from 'react'
import { Link } from "react-router-dom"

const HomeWorks = (props) => {
    const { data } = props

    return(
        <div className='home__works'>
         <div className='work__tag'>{data.map((work) => (<Link to=""><div className='work__tag--container'><div className='work__tag--square'></div><div className='work__tag--tag'>{work.tag}</div><div className='work__tag--square'></div></div></Link>))}</div>
               
        {data.map((work) => (
            <div className="home__card-container" >
                <div className="home__card" >
                    <Link to={work.url}>
                        <div className="home__card-content">
                            <div className="home__background-image" ></div>
                            <div>{work.tag}</div>
                            <p>{work.title}</p>
                            <img className="home__card-image"  src=""/>
                            <p>{work.description}</p>
                        </div>
                    </Link>
                </div>
            </div>
        ))}
    </div>
    )
}

export default HomeWorks;