
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/Home/HomePage';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Portfolio />
      <About/>
      <Skills/>

      {/* <Footer /> */}
    </>

  );
}

export default App;
