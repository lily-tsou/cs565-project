import '../styles/EditBar.css'
import React from 'react'

function EditBar(props) {
    let readonly = props.readonly;
    let editMode;

     if(readonly){
        editMode = <button type="button" className="editbar-button" id = "editMode" onClick ={props.editAction} name="edit">Edit</button>

    }
    else{
        editMode = <button type="button" className="editbar-button" id = "editMode" onClick ={props.editAction} name="edit">Editing</button>
    }

    return (
        <div className = "editbar">
            {editMode}
            <button type="button" className="editbar-button" onClick ={props.editAction} name="resubmit" id="save">Save</button>
            <button type="button" className="editbar-button" onClick={props.buttonAction} name="delete" id="delete">Delete</button>
        
        </div>
    )
}

export default EditBar
