import React from 'react';
import Header from './Header';
import TobBanner from './TobBanner';
import Courses from './Courses';

const Home = () => {
    return (
        <div className='bg-[#0d0518] h-auto'>
            <Header /> 
            <TobBanner />
            <Courses />
        </div>
    );
};

export default Home;