import "./footer.css";
import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        TOLEX
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Potfolio</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; TOLEX Tutorials. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
