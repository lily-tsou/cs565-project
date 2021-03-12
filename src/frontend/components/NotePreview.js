/*
    NotePreview.js

    Component for note list preview.

*/

import React from 'react';
import '../styles/App.css';

function NotePreview(props) {
    return (
        <div className='card-container'>
            
            <div className='card-content'>
                <div className='card-title'>
                    {props.title}
                </div>
                <div className='card-body'>
                   {props.note}
                </div>
            </div>
        </div>
    );
};

export default NotePreview;
