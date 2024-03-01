// src/components/PortfolioGrid.js
import React from 'react';

function PortfolioPage() {

    const projects = [
        {
          title: 'Student management App',
          image:"https://media.istockphoto.com/id/1623303770/photo/creative-background-image-is-blurred-evening-city-lights-and-light-snowfall.webp?b=1&s=170667a&w=0&k=20&c=PhWd1zt98e6K70KAAb1BjzZXGdQZZRwfqvdtJOwTfIw=",
          description: 'A short description of your project.',
          link: 'https://student-manage-system.vercel.app/',
        },
        {
          title: 'Project Title 2',
          description: 'Another short description of your project.',
          link: '#',
        },
      ];
    
  return (
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.image} alt={project.title} />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default PortfolioPage;
