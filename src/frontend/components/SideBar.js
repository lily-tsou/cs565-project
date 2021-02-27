import React from 'react'
import Search from './Search'
import NotePreview from './NotePreview'

export default function SideBar(props) {
    return (
        <aside className="grid-item grid-item2">
            <ul className="notelist">
                <Search handleChange={props.handleSearchChange}/>
                    {props.NoteList.map(item => {
                        return <li className="noteitem" key={item._id} id={item._id}>
                            <a className="notecard" onClick={() => props.handleOnClick(item._id, item.title, item.note)} href="#"> 
                            { <NotePreview title = {item.title} note = {item.note} /> }
                            </a>
                        </li>
                })}
            </ul>
        </aside>
    )
}