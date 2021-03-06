import React from 'react'
import EditBar from "./EditBar"
import '../styles/App.css'

function Editor(props) {
    return (
        <div className = "editor" style={{display: props.isHidden ? 'none' : 'block' }}>
            <EditBar readOnly = {props.editReadOnly} editAction = {props.editNoteAction} buttonAction = {props.buttonAction} 
            backButton = {props.backButton} backClick = {props.backClick}/>
            <textarea readOnly id = "note-title" value={props.title} onChange={props.handleTitleChange}/>
            <textarea readOnly id = "note-body" value={props.body} onChange={props.handleNoteChange}/>
        </div>
        )
    }
    
export default Editor
