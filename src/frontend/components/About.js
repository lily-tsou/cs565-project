/*
    About.js
    
    About component is called from App.js when users navigate to /About
    Contains a description of the NoteQuest app.
    
*/

import React from 'react';
import {FaReact, FaNodeJs,FaGoogle, FaGithub} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di'

const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

const p1 = `
NoteQuest is an application created by Michael Howard and Lily Tsou for Portland State University's CS 565: Full-stack Web Development. 
Both Michael and Lily were inspired by various note taking applications that they have used in the past, namely Evernote, and wanted to
create a lightweight version of a fully-functional note taking application. 
The main operations this app supports are adding a new note, editing an existing note, and deleting a note. Users are also able to see a list 
of all saved notes as well as retrieve any existing note from the database.
`;
const t2 = `System Architecture: The MERN Stack`;
const p2 = `
The front end of this application was created with React (a JavaScript library written by Facebook) and styled with CSS. 
The back end uses Node.js, which is a JavaScript runtime environment, and Express.js, an open-source back-end framework built on node.js. 
All of the note data is held in a MongoDB database, which is hosted by MongoDB Atlas. 
Using GitHub Actions, NoteQuest is deployed to a Google Kubernetes Engine container, and is hosted via the Google Cloud Platform. 
`;

function About(props) {
    let t1 = `About NoteQuest v${props.version}`;
    return (
        <div className="my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <header>
                <h1 className="visually-hidden">About</h1>
            </header>
            <main className="about-container">
                <h2 className="about-header">{t1}</h2>
                <p className="about-text">{p1}</p>
                <h2 className="about-header">{t2}</h2>
                <p className="about-text">{p2}</p>
            </main>
            <footer className="about-footer">
                <div className="about-icon"><FaReact/></div>
                <div className="about-icon"><DiMongodb/></div>
                <div className="about-icon"><FaNodeJs/></div>
                <div className="about-icon"><FaGithub/></div>
                <div className="about-icon"><FaGoogle/></div>
            </footer>
        </div>
    );
};

export default About;
