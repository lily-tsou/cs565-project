import React from 'react'
import ContactCard from './ContactCard'
import background1 from '../styles/code1.jpg'
import background2 from '../styles/code2.png'
import lily from '../styles/lily.jpg'
import michael from '../styles/michael.jpeg'
const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

function Contact() {
    let lilyText = `
    Lily is a current master's student in Portland State University's computer science department. 
    She earned her bachelor's degree in psychology, with a minor in biology, from Portland State in 2016. 
    After graduating, she spent some time in the retail world as a store manager, but soon realized that her 
    passion for problem-solving fit in well with the CS classes she had taken as undergrad electives. She joined 
    the master's program in Winter 2021 after having completed the grad prep track.
    `;

    let michaelText = `
    Michael has a bachelor's degree in electrical engineering, and industry experience as a software manager. 
    During his career, he realized that he was happiest when writing his own code. He was able to gather programming 
    experience while working on projects, but was interested in learning about the theory behind what 
    he was writing. He enrolled in Portland State's master's program to fill some of the gaps in his knowledge 
    before he transitions from the management to the developer side of the industry.
    `;

    return (
        <div className = "my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <div className = "contact-container">         
                <ContactCard name = "Michael" body = {michaelText} image = {michael} background = {background2} 
                github = "https://github.com/zemar" email = "mihoward@pdx.edu"/>      
                <ContactCard name = "Lily" body = {lilyText} image = {lily} background = {background1} 
                github = "https://github.com/lily-tsou" email = "tsou@pdx.edu"/>
            </div>
        </div>
        )
    }
    
    export default Contact