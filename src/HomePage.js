
import React from 'react';
import './App.css'
import bgImage from './bg.jpg'; // Replace with your background image file

function HomePage() {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className="hero-text">Nakul Saini</h1>
      <p className="hero-subtext">Front-End developer</p>
      <a href="/portfolio" className="hero-button">View Portfolio</a>
    </div>
  );
}

export default HomePage;
