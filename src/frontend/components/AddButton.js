/*
    AddButton.js

    The AddButton react component.  This provides a button element who's onClick event is passed 
    back up to the parent component.  The add a new note action is then handled by an ancestor.

*/

import React from 'react';
import {BsFileEarmarkPlus} from 'react-icons/bs';

function AddButton(props) {
    return (
        <div className="search-add">
            <button type="button" className="add-button" name="add" onClick={props.addAction}><span id="new-icon"><BsFileEarmarkPlus/> </span> <span>New Note</span></button>
        </div>
    );
};

export default AddButton;
