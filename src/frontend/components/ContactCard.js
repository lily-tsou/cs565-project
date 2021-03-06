import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

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
                    <img src = {props.image} className = "contact-image"/> 
                    <h2 className = "contact-title">{props.name}</h2>
                    <div className = "content-box">
                        <p> {props.body}</p>
                        <a className = "contact-link" href={props.github}><FaGithub/></a>
                        <a className = "contact-link" href = {`mailto:${props.email}`}><AiOutlineMail/></a>
                    </div>
                </div>
        </div> 
        )
    }
    
    export default ContactCard
    