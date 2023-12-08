import React from 'react';
import Header from './Header';
import TobBanner from './TobBanner';
import Courses from './Courses';
import MobileApp from './MobileApp';
import Success_story from './Success_story';

const Home = () => {
    return (
        <div className='bg-[#0d0518] h-auto'>
            <Header /> 
            <TobBanner />
            <Courses />
            <MobileApp />
            <Success_story />
        </div>
    );
};

export default Home;