import '../styles/App.css'
import React from 'react'
import {FaRegSave, FaRegEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {BiArrowBack} from 'react-icons/bi'

export default function EditBar(props) {
    return (
        <div className = "editbar">
            <button type="button" className="editbar-button" onClick ={props.backClick} name="backClick" id="backClick" label = "back"
            style={{display: props.backButton ? 'block' : 'none' }}><span className = "visually-hidden">Go Back</span><BiArrowBack/></button>
            <button type="button" className="editbar-button" onClick ={props.editAction} name="editMode" id="editMode" label = "edit"><span className = "visually-hidden">Edit</span><FaRegEdit/></button>
            <button type="button" className="editbar-button" onClick ={props.buttonAction} name="save" id="save" label = "save"><span className = "visually-hidden">Save</span><FaRegSave/></button>
            <button type="button" className="editbar-button" onClick={props.buttonAction} name="delete" id="delete" label = "delete"><span className = "visually-hidden">Delete</span><RiDeleteBin6Line/></button> 
        </div>
    )
}