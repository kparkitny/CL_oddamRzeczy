import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NavBox = () => {
  return (
    <nav>
      <ul className="navBoxStyle">
        <li><Link to="header">Start</Link></li>
        <li><Link to="steps">O co chodzi?</Link></li>
        <li><Link to="about">O nas</Link></li>
        <li><Link to="helpto">Fundacja i organizacja</Link></li>
        <li><Link to="contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
export default NavBox;
