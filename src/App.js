
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/Home/HomePage';
import PortfolioPage from './Components/Portfolio/PortfolioPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
