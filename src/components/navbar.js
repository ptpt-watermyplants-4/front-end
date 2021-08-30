import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../Images/logo6.png';
import landingPage from './Homepage/LandingPage';
import About from './Homepage/About';
import Contact from './Homepage/Contact';
import Gallery from './Homepage/Gallery';
import UserProfile from './UserProfile';
import Login from './login';
import Register from './register';
import './Styles/Navbar.css'
import WaterMyPlantsPage from './WaterMyPlantsPage';
import PrivateRoute from './PrivateRoute';







const Navbar = () => {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        } else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <nav className={ nav ? 'nav active' : 'nav'}>
                <a href={landingPage} className='logo'>
                    <img src={logo} alt='plant logo'/>
                </a>
                <input type='checkbox' className='menu-btn' id='menu-btn'/>
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
            <div className="linkContainer">
                <Link className="navlink" to="/watermyplants">Main Page</Link>
                <Link className="navlink" to="/profile">Profile</Link>
                <Link className="navlink" to="/gallery">Gallery</Link>
                <Link className="navlink" to="/contact">Contact</Link>
                <Link className="navlink" to="/about">About</Link>
                <Link className="navlink" to="/login">Login</Link>
                <Link className="navlink" to="/register">Sign Up!</Link>
            </div>
                
            </nav>

            <Switch>
                <PrivateRoute path='/watermyplants' component={WaterMyPlantsPage} />

                <Route path='/profile'>
                    <UserProfile />
                </Route>

                <Route path='/gallery'>
                    <Gallery />
                </Route>

                <Route path='/contact'>
                    <Contact />
                </Route>

                <Route path='/about'>
                    <About />
                </Route>

                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/register'>
                    <Register />
                </Route>
            </Switch>
        </>
    )
}

export default Navbar;