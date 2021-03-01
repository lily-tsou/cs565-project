import React from 'react'
import Search from './Search'
import NotePreview from './NotePreview'
import AddButton from './AddButton'

export default function SideBar(props) {
    return (
        <aside className="grid-item grid-item2">
            <div className = "search-add">
                <AddButton action = {props.AddAction}/>
                <Search handleChange={props.handleSearchChange}/>
            </div>
            <ul className="notelist">
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