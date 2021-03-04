import '../styles/App.css'
import React, { useState } from "react";
import logo from "../styles/logo.png"
import {Link} from "react-router-dom";


export default function Navbar() {
    let [dark, setDark] = useState(false);

    let switchTheme = () =>{
        if(!dark){
            document.documentElement.setAttribute('data-theme', 'dark');
            setDark(true);
        }

        else {
            document.documentElement.setAttribute('data-theme', 'light');
            setDark (false);
        }
    }

    return (
        <nav className = "main-navbar">
            <img id = "logo" src={logo} alt="logo"></img>
            <Link to = "/" className ="navbar-button">
                <button type="button" className="navbar-button" name="home">Home</button>
            </Link>
            <button type="button" className="navbar-button" name="darkmode" onClick = {switchTheme}>{dark ? "Light" : "Dark"}</button>
            <Link to = "/Contact" className ="navbar-button">
                <button type="button" className="navbar-button" name="contact">Contact</button>
            </Link>
            <Link to = "/About" className ="navbar-button">
                <button type="button" className="navbar-button" name="about">About</button>
            </Link>
        </nav>
    )
}