import React from "react";
import "./style.scss";
import decorationImgHelpTo from '../../../assets/Decoration.svg';

const HelpTo = () => {
    return (
        <section className="helpToWrapper">
           
                <p className="helpToWrapperTitle">Komu pomagamy?</p>
                <img src={decorationImgHelpTo} alt="dekoracja" className="decorationImgHelpTo"/>
                <div className="helpToWrapperButtons">
                    <button onClick={"test"} className="helpToWrapperBtn">Fundacjom</button>
                    <button onClick={"test"} className="helpToWrapperBtn">Organizacjom pozarządowym</button>
                    <button onClick={"test"} className="helpToWrapperBtn">Lokalnym zbiórkom</button>
                </div>
                <p className="helpToWrapperListTitle">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>





        </section>
    )
}
export default HelpTo;