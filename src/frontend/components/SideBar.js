/*
    SideBar.js

    The SideBar react component.  It is rendered to the left column of the HomePage compenent and
    contains 3 child components:

    1. AddButton
    2. Search
    3. NotePreview x n

    Actions from all child components are passed back up to the parent to be handled by an ancestory.
    The noteList prop is passed in and is iterated over to generate the n x NotePreview elements.  
    Also, isHidden is passed in and used to hide SideBar if on mobile and Editor is visible.

*/

import React from 'react';
import Search from './Search';
import NotePreview from './NotePreview';
import AddButton from './AddButton';

function SideBar(props) {
    return (
        <aside className="sidebar" style={{display: props.isHidden ? 'none' : 'block' }}>
            <AddButton addAction={props.addAction}/>            
            <Search searchChange={props.searchChange}/>
            <ul className="notelist">
                    {props.noteList.map(item => {
                        return <li className="noteitem" key={item._id} id={item._id}>
                            <a className="notecard" onClick={() => props.listSelect(item._id, item.title, item.note)} href="#"> 
                            { <NotePreview title={item.title} note={item.note} /> }
                            </a>
                        </li>
                })}
            </ul>
        </aside>
    );
};

export default SideBar;
