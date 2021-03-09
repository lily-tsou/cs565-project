import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

function ContactCard(props) {
    const cardStyle = {
        backgroundImage: `url(${
            props.background})`,
        backgroundSize: '100% 32%',
        backgroundRepeat: 'no-repeat'
 
    };

    return (
            <div className = "contact-card" style = {cardStyle}>
                <div className = "contact-content">
                    <img src = {props.image} className = "contact-image" alt = "Image of NoteQuest development team member."/> 
                    <h2 className = "contact-title">{props.name}</h2>
                    <div className = "content-box">
                        <p> {props.body}</p>
                        <a className = "contact-link" href={props.github}><span className = "visually-hidden">Click here to view {props.name}'s Github</span><FaGithub/></a>
                        <a className = "contact-link" href = {`mailto:${props.email}`}><span className = "visually-hidden">Click here to send {props.name} email</span><AiOutlineMail/></a>
                    </div>
                </div>
        </div> 
        )
    }
    
    export default ContactCard
    