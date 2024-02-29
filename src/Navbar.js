import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare   } from 'react-icons/ai';

const Navbar = () => {
 

  return (

<>
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Nakul Saini
      </Link>
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item social-links">
          <a href="https://github.com/Captain-077" target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/nakul-saini/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
          <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterSquare   />
          </a>
        </li>
      </ul>
    </nav>
    </>
  )
 
};

export default Navbar;
