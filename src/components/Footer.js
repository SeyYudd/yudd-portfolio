// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>&copy; 2023 Yudi's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;