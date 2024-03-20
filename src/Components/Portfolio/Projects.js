import React, { useEffect, useState } from 'react'
import { ProjectsData } from "./Data";
import { ProjectsNav } from "./Data";
import ProjectItems from './ProjectItems';

function Projects() {

    const [item, setItem] = useState({ name: "All" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {

        if (item.name === "All") {
            setProjects(ProjectsData);
        }

        else {
            const newProjects = ProjectsData.filter((project) => {
                return project.category === item.name
            })
            setProjects(newProjects);
        }
    },[item])

    const handleClick = (e,index) => {
        setItem({name: e.target.textContent });
        setActive(index)
    }



    return (
        <>
            <div className="work__filters">
                {ProjectsNav.map((item, index) => {
                    return (
                        <span onClick={(e) => {handleClick(e,index)}}
                        className={`${active === index ? 'active-work' : ''} work__item`} key={index}>
                        {item.name}
                        </span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <ProjectItems item={item} key={item.id} />
                })}




            </div>
        </>
    )
}

export default Projects