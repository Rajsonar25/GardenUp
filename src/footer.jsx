import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-col">
          <h2>
            GARDEN UP
            <div className="underline"><span></span></div>
          </h2>
          <p className="footer-para">
            AISSMS IOIT <br /> Environmental Informatics Project
          </p>
        </div>
        
        <div className="footer-col">
          <h3 className="text-office">
            CONTACT US
            <div className="underline"><span></span></div>
          </h3>
          <p className="email">gardenup0325@gmail.com</p>
          <p className="phone">+91 25689 56741</p>
        </div>
        
        <div className="footer-col">
          <h3>
            Menu
            <div className="underline"><span></span></div>
          </h3>
          <ul>
            <li><a href="#navbar">Home</a></li>
            <li><a href="https://nurserylive.com/pages/about-nurserylive">About</a></li>
            <li><a href="#footer">Contact Us</a></li>
            <li><a href="">Our Team</a></li>
            <li><a href="">Testimonials</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>
            Newsletter
            <div className="underline"><span></span></div>
          </h3>
          <form action="">
            <i className="fa-solid fa-envelope"></i>
            <input type="text" placeholder="Enter Company Email" />
            <a href="https://nurserylive.com/challenge#footer_newsletter_static-footer-1">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </form>
          <div className="social-icons">
            <a href="https://www.facebook.com/nurserylive/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/nurserylive_/?hl=en"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/nurserylive"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://in.linkedin.com/company/nurserylive"><i className="fa-brands fa-google-plus"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footerBottom">
        <p>
          Copyright &copy;2023; Designed by <span className="designer">SEJAL THAKUR & RAJ SONAR <br />FY-COMPUTER(B)</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
