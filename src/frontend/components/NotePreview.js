import React from 'react'
import '../styles/NotePreview.css';

function NotePreview(props) {
    return (
        <div className = 'card-container'>
            
            <div className = 'card-content'>
                <div className = 'card-title'>
                    {props.title}
                </div>
                <div className = 'card-body'>
                    <p>{props.body}</p>
                </div>
            </div>

        </div>
    )
}

export default NotePreview
