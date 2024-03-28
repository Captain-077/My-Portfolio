import React from 'react'
import "./about.css"
import AboutImg from '../../assests/about.jpg';
import Info from './Info';

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My introduction</span>


            <div className="about__container container grid">
                <img src={AboutImg} className="about__img" alt="" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at ab voluptatem corporis sunt adipisci repudiandae laborum aut magni ipsum.
                    </p>
                    <a href="#" className='button button--flex'>Contact me</a>

                </div>

            </div>

        </section>
    )
}

export default About