import '../styles/App.css'
import React from 'react'
import logo from "../styles/logo.png"

export default function Navbar(props) {
    

    return (
        <nav className = "main-navbar">
            <img className = "logo" src={logo} alt="logo"></img>
            <button type="button" className="navbar-button" name="darkmode">Dark Mode</button>
            <button type="button" className="navbar-button" name="contact">Contact</button>
            <button type="button" className="navbar-button" name="about">About</button>
        </nav>
    )
}