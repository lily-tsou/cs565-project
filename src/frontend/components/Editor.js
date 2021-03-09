import React from 'react'
import EditBar from "./EditBar"
import '../styles/App.css'

function Editor(props) {
    return (
        <div className = "editor" style={{display: props.isHidden ? 'none' : 'block' }}>
            <EditBar readOnly = {props.editReadOnly} editAction = {props.editNoteAction} buttonAction = {props.buttonAction} 
            backButton = {props.backButton} backClick = {props.backClick}/>
            <label htmlFor="note-title"><span className = "visually-hidden">Note title</span></label>
            <textarea readOnly id = "note-title" label = "title" value={props.title} onChange={props.handleTitleChange}/>
            <label htmlFor="note-body"><span className = "visually-hidden">Note body</span></label>
            <textarea readOnly id = "note-body" label = "body" value={props.body} onChange={props.handleNoteChange}/>
        </div>
        )
    }
    
export default Editor
