import React from 'react'

function AddButton(props) {
    return (
        <button type="button" className="add-button" name="add" onClick = {props.action}>New</button>
    )
}
export default AddButton
