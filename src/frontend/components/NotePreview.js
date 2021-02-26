import React from 'react'
import '../styles/App.css';

export default function NotePreview(props) {
    return (
        <div className = 'card-container'>
            
            <div className = 'card-content'>
                <div className = 'card-title'>
                    {props.title}
                </div>
                {/* <div className = 'card-body'>
                    <p>{props.note}</p>
                </div> */}
            </div>

        </div>
    )
}