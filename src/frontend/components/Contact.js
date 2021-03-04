import React from 'react'
import Navbar from './Navbar'
import ContactCard from './ContactCard'
import background1 from '../styles/code1.jpg'
import background2 from '../styles/code2.png'
import lily from '../styles/lily.jpg'
import michael from '../styles/michael.jpeg'
const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

function Contact() {
    let text = `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Perspiciatis quo consequatur magni amet, 
    laborum voluptate voluptatibus perferendis assumenda temporibus 
    odio dolore reiciendis repudiandae? Sed accusantium odio aspernatur 
    sequi officia id!`;

    return (
        <div className = "my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <Navbar/>    
            <div className = "contact-container">               
                <ContactCard name = "Lily" body = {text} image = {lily} background = {background1} 
                github = "https://github.com/lily-tsou" email = "tsou@pdx.edu"/>
                <ContactCard name = "Michael" body = {text} image = {michael} background = {background2} 
                github = "https://github.com/zemar" email = "mihoward@pdx.edu"/>
            </div>
        </div>
        )
    }
    
    export default Contact