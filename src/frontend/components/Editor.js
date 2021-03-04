import React from 'react'
import EditBar from "./EditBar"
import '../styles/App.css'

function Editor(props) {
    return (
        <div className = "editor">
            <EditBar readOnly = {props.editReadOnly} editAction = {props.editNoteAction} buttonAction = {props.buttonAction}/>
            <textarea readOnly id = "note-title" value={props.title} onChange={props.handleTitleChange}/>
            <textarea readOnly id = "note-body" value={props.body} onChange={props.handleNoteChange}/>
        </div>
        )
    }
    
export default Editor
