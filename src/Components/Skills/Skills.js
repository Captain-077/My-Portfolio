import React from 'react'
import "./skills.css"
import Skills1 from './Skills1'
import Skills2 from './Skills2'
import Skills3 from './Skills3'

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>


            <div className="skills__container container grid">
                <Skills1 />
                <Skills3 />
                <Skills2 />
            </div>

        </section>
    )
}

export default Skills