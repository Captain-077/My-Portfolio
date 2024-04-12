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

                        Passionate Frontend Developer/Designer embracing React and cutting-edge technologies. Crafting engaging web experiences with creativity and technical expertise. Let's connect and elevate your projects! 🚀💻
                    </p>
                    <a href="#" className='button button--flex'>Contact me</a>

                </div>

            </div>

        </section>
    )
}

export default About