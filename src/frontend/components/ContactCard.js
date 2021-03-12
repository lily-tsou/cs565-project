/*
    Contact.js

    Component for contact information. 
*/

import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';

function ContactCard(props) {
    const cardStyle = {
        backgroundImage: `url(${
            props.background})`,
        backgroundSize: '100% 32%',
        backgroundRepeat: 'no-repeat'
 
    };

    return (
            <div className="contact-card" style={cardStyle}>
                <div className="contact-content">
                    <img src={props.image} className="contact-image" alt={props.alt}/> 
                    <h2 className="contact-title">{props.name}</h2>
                    <div className="content-box">
                        <p> {props.body}</p>
                        <a className="contact-link" href={props.github}><span className="visually-hidden">View {props.name}'s Github account</span><FaGithub/></a>
                        <a className="contact-link" href={`mailto:${props.email}`}><span className="visually-hidden">Send {props.name} email</span><AiOutlineMail/></a>
                    </div>
                </div>
        </div> 
    );
};
    
export default ContactCard;
