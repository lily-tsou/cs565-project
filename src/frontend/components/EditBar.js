import '../styles/App.css'
import React from 'react'
import {FaRegSave, FaRegEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {BiArrowBack} from 'react-icons/bi'

export default function EditBar(props) {
    let editButton = props.readOnly ? '' : 'Editing';
    return (
        <div className = "editbar">
            <button type="button" className="editbar-button" onClick ={props.backClick} name="backClick" id="backClick"
            style={{display: props.backButton ? 'block' : 'none' }}><BiArrowBack/></button>
            <button type="button" className="editbar-button" onClick ={props.editAction} name="editMode" id="editMode"><FaRegEdit/></button>
            <button type="button" className="editbar-button" onClick ={props.buttonAction} name="save" id="save"><FaRegSave/></button>
            <button type="button" className="editbar-button" onClick={props.buttonAction} name="delete" id="delete"><RiDeleteBin6Line/></button>
        
        </div>
    )
}