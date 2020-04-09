import React from "react";
import "./style.scss";
import decorationImgAbout from '../../../assets/Decoration.svg';
import signatureAbout from '../../../assets/Signature.svg';
import peopleAbout from '../../../assets/People.jpg';

const About = () => {
    return (
        <section className="aboutUsWrapper" id="aboutSection">
          <div className="aboutUsLeft">
             <p className="aboutUsLeftTitle">O nas</p>
             <img src={decorationImgAbout} alt="dekoracja" className="decorationImgAbout"/>
             <p className="aboutUsLeftInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laudantium reprehenderit ducimus, praesentium dolore saepe voluptatem corrupti assumenda quia quo ea aut deleniti eveniet maxime architecto nulla ipsa id modi!</p>
             <img src={signatureAbout} alt="podpis" className="signatureAbout"/>
           </div>
            <div className="aboutUsRight">
                <img src={peopleAbout} alt="people" className="peopleAbout"/>
         </div>
    </section>
    )
}
export default About;