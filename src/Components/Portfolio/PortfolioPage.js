import React from 'react';
// import studentIMG from "./images/student_app.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

function PortfolioPage() {

    
    
  return (
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <a href={project.link} target="_blank"><img src={project.image} alt={project.title} /></a>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-techstack"> <span>Tech Stack:</span> {project.techstack}</p>
          <p className="project-description">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link"><FontAwesomeIcon icon={faArrowUpRightFromSquare}  style={{color:'white', marginRight:'6px'}}/>Live link</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github"><FontAwesomeIcon icon={faGithub}  style={{color:'white', marginRight:'6px'}}/>Github</a>
        </div>
      ))}
    </div>
  );
}

export default PortfolioPage;
