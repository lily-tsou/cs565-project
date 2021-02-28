import '../styles/App.css'
import React from 'react'
import logo from "../styles/logo.png"

export default function Navbar(props) {

    let dark = false;
    let darkText = "Dark Mode";
    
    const toggleDark = document.querySelector('.darkmode');

    let switchTheme = () =>{
        if(!dark){
            document.documentElement.setAttribute('data-theme', 'dark');
            dark = true;
            darkText = "Dark Mode";
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            dark = false;
            //Not working?
            darkText = "Light Mode";
        }
    }

    return (
        <nav className = "main-navbar">
            <img className = "logo" src={logo} alt="logo"></img>
            <button type="button" className="navbar-button" name="darkmode" onClick = {switchTheme}>{darkText}</button>
            <button type="button" className="navbar-button" name="contact">Contact</button>
            <button type="button" className="navbar-button" name="about">About</button>
        </nav>
    )
}