import React from 'react';
import Header from './Header';
import TobBanner from './TobBanner';
import Courses from './Courses';
import MobileApp from './MobileApp';
import Success_story from './Success_story';
import OurMission from './OurMission';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='bg-[#0d0518] h-auto'>
            <Header /> 
            <TobBanner />
            <Courses />
            <MobileApp />
            <Success_story />
            <OurMission />
            <Footer />
        </div>
    );
};

export default Home;