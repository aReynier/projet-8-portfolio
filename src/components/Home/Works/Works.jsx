import HomeWorks from '../HomeWorks/HomeWorks'

const Works = props => {
    const {allData, language} = props

    return(
        <div  id="works" className='work'>
            <div className='transition__background2'></div>
            <div className='home_work__container'>
            <div className='work__square--decor--container'>
                <div className='work__square--decor'>
                    {}
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
            <div className='home__title--container' >
                <div className='home__title--square-container'>
                    <div className='home__title--square-1'>
                        <div className='home__title--square-2'></div>
                    </div>
                </div>
                <h2 className='work__title home__title-text'>{ allData[language].headers[2].link }</h2>
            </div>
       < HomeWorks data={allData} language={language}/>
       </div>
    </div>
    )
}

export default Works