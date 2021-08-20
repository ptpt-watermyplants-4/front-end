import React, { useState } from 'react';
import logo from '../Images/logo.png';
import landingPage from './Homepage/LandingPage';
import profile from './UserProfile';
import gallery from './Homepage/Gallery';
import contact from './Homepage/Contact';
import about from './Homepage/About';
import login from './login';

const navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <nav>
            <a href={landingPage} className='logo'>
                <img src={logo} alt='plant logo'/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href={profile}>Profile</a></li>
                <li><a href={gallery}>Gallery</a></li>
                <li><a href={contact}>Contact</a></li>
                <li><a href={about}>About</a></li>
                <li><a href={login}>Login</a></li>
            </ul>
        </nav>
    )
}

export default navbar;