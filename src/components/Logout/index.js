import React from "react";
import "./style.scss";
import decorationImg from "../../assets/Decoration.svg";

const Logout = () => {
  return (
    <section className="logoutWrapper">
      <div className="logoutCenter">
        <h2 className="logoutTitle">Wylogowano pomyślnie!</h2>
        <img src={decorationImg} alt="dekoracja" className="decorationImgStyle" />

      </div>
    </section>
  )
}
export default Logout;

