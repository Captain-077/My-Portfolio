
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage';

function App() {
  return (
    <Router>
      <Navbar />
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
