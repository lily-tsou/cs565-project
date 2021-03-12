/*
    Editor.js

    The Editor react component.  This renders a text area for both the note title and body.  The EditBar component is
    placed just above to support a set of controls to act on the text areas.

    The onChange event on both text areas is passed back to it's parent compenent to be handled by an ancestor.
    Also, readOnly is set on both and can be set/cleared via actions from the EditBar controls.

*/

import React from 'react';
import EditBar from './EditBar';
import Footer from './Footer';
import '../styles/App.css';

function Editor(props) {
    return (
        <main className="editor" style={{display: props.isHidden ? 'none' : 'block' }}>
            <EditBar readOnly={props.readOnly} editAction={props.editAction} saveAction={props.saveAction} 
            backButton={props.backButton} backAction={props.backAction} deleteAction={props.deleteAction}/>
            <label htmlFor="note-title"><span className="visually-hidden">Note title</span></label>
            <textarea readOnly id="note-title" label="title" value={props.title} onChange={props.titleChange}/>
            <label htmlFor="note-body"><span className="visually-hidden">Note body</span></label>
            <textarea readOnly id="note-body" label="body" value={props.body} onChange={props.noteChange}/>
            <Footer/>
        </main>
    );
};
    
export default Editor;
