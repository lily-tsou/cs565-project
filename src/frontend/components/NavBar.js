/*
    NavBar.js

    Rendered at the top of all pages. Links users to /, /Contact, /About and allows to toggle between light and dark mode
*/

import '../styles/App.css';
import React, { useState } from 'react';
import logo from '../styles/logo.png';
import {Link} from 'react-router-dom';

function NavBar(props) {
    let [dark, setDark] = useState(false);

    let switchTheme = () => {
        if(!dark){
            document.documentElement.setAttribute('data-theme', 'dark');
            setDark(true);
        }

        else {
            document.documentElement.setAttribute('data-theme', 'light');
            setDark (false);
        }
    };

    return (
        <nav className="main-navbar">
            <img id="logo" src={logo} alt="NoteQuest logo image shows an open notebook in a circle"></img>
            <Link to="/" className ="navbar-button" id="home-button">
                <button type="button" className="navbar-button" name="home">Home</button>
            </Link>
            <button type="button" className="navbar-button" name="darkmode" id="dark-button"
            onClick={switchTheme}>{dark ? "Light" : "Dark"}</button>
            <Link to="/Contact" className ="navbar-button" id="contact-button">
                <button type="button" className="navbar-button" name="contact">Contact</button>
            </Link>
            <Link to="/About" className ="navbar-button" id="about-button">
                <button type="button" className="navbar-button" name="about">About</button>
            </Link>
        </nav>
    );
};

export default NavBar;