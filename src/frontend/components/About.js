import React from 'react'
import Navbar from './Navbar'
import {FaReact, FaNodeJs,FaGoogle} from 'react-icons/fa'
import {SiKubernetes, SiMongodb} from 'react-icons/si'
const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

function About() {
    return (
        <div className = "my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <Navbar/>
            <div className = "about-container">
                <p className = "about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    eserunt mollit anim id est laborum.
                </p>
            </div>
            <footer className = "about-footer">
                <div className = "about-icon"><FaReact/></div>
                <div className = "about-icon"><SiMongodb/></div>
                <div className = "about-icon"><FaNodeJs/></div>
                <div className = "about-icon"><SiKubernetes/></div>
                <div className = "about-icon"><FaGoogle/></div>
            </footer>
        </div>
    )
}

export default About
