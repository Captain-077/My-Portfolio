import React from 'react'

function ProjectItems({ item }) {
    return (
        <div className="work__card" key={item.id}>

            <img src={item.image} alt="" className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            {/* <p className="work__desc">{item.description}</p> */}
            <p className="work__techstack"><span style={{fontWeight:'bold'}}>Techstack:</span>{item.techstack}</p>
            

            <div className="button__container">
            <a href={item.link} target='_blank' className="work__button">
                 <i class="uil uil-external-link-alt work__button-icon"></i> Live link
            </a>
            <a href={item.github} target='_blank' className="work__button" style={{marginLeft:"10px"}}>
            <i class="uil uil-github-alt work__button-icon"></i> Source code 
            </a>
            </div>



        </div>
    )
}

export default ProjectItems