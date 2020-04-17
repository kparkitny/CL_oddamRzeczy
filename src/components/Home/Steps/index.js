import React from "react";
import "./style.scss";
import decorationImgSteps from "../../../assets/Decoration.svg";
import columnImg1 from "../../../assets/Icon-1.svg";
import columnImg2 from "../../../assets//Icon-2.svg";
import columnImg3 from "../../../assets/Icon-3.svg";
import columnImg4 from "../../../assets/Icon-4.svg";

const Steps = () => {
    return (
        <section className="fourStepsWrapper" id="stepsSection">
            <div className="fourStepsTop">
                <h2 className="fourStepsTopTitle">Wystarczą 4 proste kroki</h2>
                <img src={decorationImgSteps} alt="dekoracja" className="decorationImgSteps" />
            </div>
            <div className="fourStepsBottom">
                <div className="fourStepsBottomColumn">
                    <img src={columnImg1} alt="tshirt" className="fourStepsImage" />
                    <p className="fourStepsBottomColumnTitle">Wybierz rzeczy</p>
                    <hr className="fourStepsBottomColumnBrake" />
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="fourStepsBottomColumn">
                    <img src={columnImg2} alt="bag" className="fourStepsImage" />
                    <p className="fourStepsBottomColumnTitle">Spakuj je</p>
                    <hr className="fourStepsBottomColumnBrake" />
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="fourStepsBottomColumn">
                    <img src={columnImg3} alt="loop" className="fourStepsImage" />
                    <p className="fourStepsBottomColumnTitle">Zdecyduj komu chcesz pomóc</p>
                    <hr className="fourStepsBottomColumnBrake" />
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="fourStepsBottomColumn">
                    <img src={columnImg4} alt="courier" className="fourStepsImage" />
                    <p className="fourStepsBottomColumnTitle">Zamów kuriera</p>
                    <hr className="fourStepsBottomColumnBrake" />
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="stepsBtnSection">
                <div className="stepsBtnWrapper">
                    <button className="stepsBtnStyle">oddaj rzeczy</button>
                </div>
            </div>
        </section>
    )
}
export default Steps;