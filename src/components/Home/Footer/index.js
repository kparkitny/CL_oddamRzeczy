import React from 'react';
import "./style.scss";
import socialFbImg from '../../../assets/Facebook.svg';
import socialInstImg from '../../../assets/Instagram.svg'

const Footer = () => {
        return (
          <section className="footerWrapper">
            <p className="blankStyle"></p>
            <p>&copy; Copyright by <a href="https://parkitny.eu/git" target="_blank" rel="noopener noreferrer">Krzysztof Parkitny</a></p>
            <div className="socialIcons"> 
                 <img src={socialFbImg} className="socialFbImgStyle" alt="facebook"/>
                 <img src={socialInstImg} className="socialInstImgStyle" alt="instagram"/>
            </div>
          </section>
        )
    }
export default Footer;