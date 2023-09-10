import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import bookiCapture from '../../../assets/projects/preview-booki.jpg'

const HomeWorks = (props) => {
    const { data, language } = props
    const [selectedTag, setSelectedTag] = useState("");

    const allTheTags = data[language].workList.flatMap((work) => work.tag.split("|"))
    const filteredTag = allTheTags.filter(function(elem,pos) {
        return allTheTags.indexOf(elem) == pos;
    });

    const filteredWorksByTag = selectedTag ?
    data[language].workList.filter((works) => works.tag.includes(selectedTag))
    : data[language].workList;

    return(
        <div className='home__works'>
            <div className='work__tag'>
            <Link to="" className='home__works_link'><div className={`work__tag--container`} onClick={() => setSelectedTag("")}><div className={`work__tag--square${!selectedTag ? ' selectedTag' : ''}`}></div><div className={`work__tag--tag${!selectedTag ? ' selectedTag' : ''}`}>Tous</div><div className={`work__tag--square${!selectedTag ? ' selectedTag' : ''}`}></div></div></Link>
            {filteredTag.map((tag) => 
                (<Link to="" className='home__works_link' key={tag}><div className={`work__tag--container`} onClick={() => setSelectedTag(tag)}><div className={`work__tag--square${tag === selectedTag ? ' selectedTag' : ''}`}></div><div className={`work__tag--tag${tag === selectedTag ? ' selectedTag' : ''}`}>{tag}</div><div className={`work__tag--square${tag === selectedTag ? ' selectedTag' : ''}`}></div></div></Link>)
            )}</div>
            <div className='home__works--list'>      
            {filteredWorksByTag.map((work) => (
                    <div className="home__card" key={work.id}  >
                        <Link to={work.url}>
                            <div className="home__card-content">
                                <h3>{work.title}</h3>
                                <div className="home__card-tag-container">
                                    <div className="home__card-tag-square"></div>
                                    <div className="home__card-tag">{work.tag.replaceAll("|", " - ")}</div>
                                    <div className="home__card-tag-square"></div>
                                </div>
                                <img className="home__card-image" src={work.imageUrl} alt="work-preview"/>
                                <p>{work.description}</p>
                            </div>
                        </Link>
                    </div>   
            ))}
            </div>
        </div>
    )
}

export default HomeWorks;