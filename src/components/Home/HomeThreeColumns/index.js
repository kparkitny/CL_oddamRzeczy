import React from "react";
import "./style.scss";

const HomeThreeColumns = () => {
  return (
    <section className="HomeThreeColumnsWrapper">
      <div className="HomeThreeCol">
        <h2>10</h2>
        <p className="singleColumnP">oddanych worków</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit voluptate fuga.</p>
      </div>
      <div className="HomeThreeCol">
        <h2>5</h2>
        <p className="singleColumnP">wspartych organizacji</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti quibusdam.</p>
      </div>
      <div className="HomeThreeCol">
        <h2>7</h2>
        <p className="singleColumnP">zorganizowanych zbiórek</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, reprehenderit.</p>
      </div>
    </section>
  );
}
export default HomeThreeColumns;