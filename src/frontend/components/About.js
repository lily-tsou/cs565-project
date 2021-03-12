/*
    About.js

    About component is called from App.js when users navigate to /About
    Contains a description of the NoteQuest app.
    
*/

import React from 'react'
import {FaReact, FaNodeJs,FaGoogle} from 'react-icons/fa'
import {SiKubernetes, SiMongodb} from 'react-icons/si'
const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

let version = `0.8.0`

const t1 = `About NoteQuest`
const p1 = `
NoteQuest (version ${version}) is an application created by Michael Howard and Lily Tsou for Portland State University's CS 565: Full-stack Web Development. 
Both Michael and Lily were inspired by various note taking applications that they have used in the past, namely Evernote, and wanted to
create a lightweight version of a fully-functional note taking application. 
The main operations this app supports are adding a new note, editing an existing note, and deleting a note. Users are also able to see a list 
of all saved notes as well as retrieve any existing note from the database.
`

const t2 = `System Architecture: The MERN Stack`
const p2 = `
The front end of this application was created with React (a JavaScript library written by Facebook) and styled with CSS. 
The back end uses Node.js, which is a JavaScript runtime environment, and Express.js, an open-source back-end framework built on node.js. 
All of the note data is held in a MongoDB database, which is hosted by MongoDB Atlas. 
Using GitHub Actions, NoteQuest is deployed to a Google Kubernetes Engine container, and is hosted via the Google Cloud Platform. 
`
function About() {
    return (
        <div className="my-container">
            <header>
                <h1 className="visually-hidden">About</h1>
            </header>
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <main className="about-container">
                <h4 className="about-header">{t1}</h4>
                <p className="about-text">{p1}</p>
                <h4 className="about-header">{t2}</h4>
                <p className="about-text">{p2}</p>
            </main>
            <footer className="about-footer">
                <div className="about-icon"><FaReact/></div>
                <div className="about-icon"><SiMongodb/></div>
                <div className="about-icon"><FaNodeJs/></div>
                <div className="about-icon"><SiKubernetes/></div>
                <div className="about-icon"><FaGoogle/></div>
            </footer>
        </div>
    )
}

export default About
