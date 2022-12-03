import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className='header d-flex align-items-center justify-content-center'>
            <div className='text-dark'>
                <p className='fs-1'>Quizact</p>
                <p className='fs-4'>Make programming easier to digest with practice tests</p>
                <p>Join over 60 million students around the world using Quizact's practice tests to reach their goals at programming contest.</p>
            </div>
            <div>
                <img className='img-fluid' src="/bg.jpg" alt="not found" />
            </div>
        </div>
    );
};

export default Header;