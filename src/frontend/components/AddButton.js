import React from 'react'
import {BsFileEarmarkPlus} from 'react-icons/bs'

function AddButton(props) {
    return (
        <div className = "search-add">
            <button type="button" className="add-button" name="add" onClick = {props.action}><span id = "new-icon"><BsFileEarmarkPlus/> </span> <span>New Note</span></button>
        </div>
    )
}
export default AddButton
