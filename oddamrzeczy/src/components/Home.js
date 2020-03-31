import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeInfo from './HomeInfo';
import HomeSteps from './HomeSteps';
import HomeAbout from './HomeAbout;'

const Home = () => {
    return (
        <div className="wrapper">
            <HomeHeader />
            <HomeMain />
            <HomeInfo />
            <HomeSteps />
            <HomeAbout />

        </div>
    );
}
export default Home;