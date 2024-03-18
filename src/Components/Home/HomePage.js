import React from "react";
import "./home.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

function HomePage() {
  return (
    <div className="home-page">
      <div className="social-icons">
        <li className="nav-item social-links">
          <a
            href="https://github.com/Captain-077"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nakul-saini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterSquare />
          </a>
        </li>
      </div>

      <div className="home-info">
        <h1 className="hero-text">Nakul Saini</h1>
        <p className="hero-subtext">Front-End developer</p>
        <p className="hero-desc">Experienced Front End developer</p>
        <a href="/portfolio" className="hero-button">
          Say Hello
        </a>
      </div>

      <div className="home-intro-image"></div>
    </div>
  );
}

export default HomePage;