import '../styles/App.css'
import React from 'react'

export default function EditBar(props) {
    let editButton = props.readOnly ? 'Edit' : 'Editing';

    return (
        <div className = "editbar">
            <button type="button" className="editbar-button" onClick ={props.editAction} name="editMode" id="editMode">{editButton}</button>
            <button type="button" className="editbar-button" onClick ={props.buttonAction} name="save" id="save">Save</button>
            <button type="button" className="editbar-button" onClick={props.buttonAction} name="delete" id="delete">Delete</button>
        
        </div>
    )
}