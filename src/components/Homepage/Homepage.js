import React from 'react';
import banner from '../../images/banner.png';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='banner-details'>
                <h1 className='banner-title'>Royal enfield meteor</h1>
                <h1 className='custom-color'>The king of the roads</h1>
                <p>The Royal Enfield Meteor 350 cruiser motorcycle was unveiled by Royal Enfield as a replacement for the Thunderbird 350 worldwide.</p>
                <button className='banner-btn'>See More</button>
            </div>
            <div className='banner-img'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Homepage;