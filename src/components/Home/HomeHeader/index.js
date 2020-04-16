import React from "react";
import LoginBox from "./LoginBox/index";
import NavBox from "./NavBox/index";
import "./style.scss";
import decorationImg from '../../../assets/Decoration.svg';

const HomeHeader = () => {
  return (
    <section className="homeHeaderWrapper">
      <div className="topMenuPanel">
                <LoginBox />
                <NavBox />
              <h1 className="topMenuPanelWord">Zacznij pomagać!</h1>
              <h1 className="topMenuPanelWord">Oddaj niechciane rzeczy w zaufane ręce</h1>
              <img src={decorationImg} alt="dekoracja" className="decorationImgStyle"/>
              <div className="btnWrapperStyle">
                <button className="btnStyle">oddaj rzeczy</button>
                <button className="btnStyle">zorganizuj zbiórkę</button>
              </div>
      </div>
    </section>
  );
}
export default HomeHeader;