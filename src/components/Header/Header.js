import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/">
                <div className="">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className='safe-riding-navbar'>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;