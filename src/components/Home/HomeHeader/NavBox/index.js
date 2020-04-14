import React from "react";
import { Link } from 'react-scroll';
import "./style.scss";

const NavBox = () => {
  return (
    <nav>
      <ul className="navBoxStyle">
        <li><Link to="header" smooth={true} spy={true} duration={700} delay={0}>Start</Link></li>
        <li><Link to="stepsSection" smooth={true} spy={true} duration={700} delay={0}>O co chodzi?</Link></li>
        <li><Link to="aboutSection" smooth={true} spy={true} duration={700} delay={0}>O nas</Link></li>
        <li><Link to="helpToSection" smooth={true} spy={true} duration={700} delay={0}>Fundacja i organizacja</Link></li>
        <li><Link to="contactSection" smooth={true} spy={true} duration={700} delay={0}>Kontakt</Link></li>
      </ul>
    </nav>
  );
}
export default NavBox;
