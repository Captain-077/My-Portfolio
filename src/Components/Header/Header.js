import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  function PDFDownloadButton() {
    // Replace 'your_pdf_file.pdf' with the path to your PDF file
    const pdfUrl = process.env.PUBLIC_URL + "/resume/Google Doc ATS NEW.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Google Doc ATS NEW.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>

      <header className="header">

        <nav className="nav container">
          
            <a href="#home" className="nav__logo">Nakul saini</a>

            <div className="nav__menu">

              <ul className="nav__list grid">

                <li className="nav__item">
                  <a href="#home" className="nav__link">
                    <i className="uil uil-estate nav__icon"></i>Home
                  </a>
                </li>


                <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                    <i className="uil uil-scenery nav__icon"></i>Portolio
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    <i className="uil uil-file-alt nav__icon"></i>Skills
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="uil uil-user nav__icon"></i>About
                  </a>
                </li>
          
              </ul>

              <i class="uil uil-times nav__close" ></i>
              </div>

              <div className="nav__toggle">
              <i class="uil uil-apps"></i>

              </div>
        </nav>

      </header>
    </>
  );
};

export default Header;
