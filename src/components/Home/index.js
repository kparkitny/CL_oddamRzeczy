import React from "react";
import HomeHeader from "../Home/HomeHeader";
import HomeThreeColumns from "../Home/HomeThreeColumns";
import Steps from "../Home/Steps"
import About from "../Home/About"
import HelpTo from "../Home/HelpTo"
// import Contact from "../Home/Contact"
// import Footer from "../Home/Footer"

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <Steps />
      <About />
      <HelpTo />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
export default Home;
