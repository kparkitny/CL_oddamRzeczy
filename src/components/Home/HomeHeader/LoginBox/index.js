import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const LoginBox = () => {
  return (
    <nav>
      <ul className="loginBoxStyle">
        <li>
          <NavLink to="/login">Zaloguj</NavLink>
        </li>
        <li>
          <NavLink to="/register">załóż konto</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default LoginBox;