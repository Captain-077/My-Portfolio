import React from 'react'
import Projects from './Projects'
import "./Portfolio.css"

function Portfolio() {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent projects</span>
            <Projects />
        </section>
    )
}

export default Portfolio