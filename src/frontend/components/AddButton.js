import React from 'react'
import {BsFileEarmarkPlus} from 'react-icons/bs'

function AddButton(props) {
    return (
        <button type="button" className="add-button" name="add" onClick = {props.action}><span id = "new-icon"><BsFileEarmarkPlus/> </span> <span>New Note</span></button>
    )
}
export default AddButton
