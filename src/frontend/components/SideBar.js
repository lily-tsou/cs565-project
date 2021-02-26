import React from 'react'
import Search from './Search'
import NotePreview from './NotePreview'

const samplePreview = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

function SideBar(props) {
    return (
        <aside className="grid-item grid-item2">
            <ul className="notelist">
                <Search handleChange={props.handleSearchChange}/>
                    {props.NoteList.map(item => {
                        return <li className="noteitem" key={item._id} id={item._id}>
                            <a onClick={() => props.handleOnClick(item._id, item.data)} href="#"> 
                            { <NotePreview title = {item.data} body = {samplePreview} /> }
                            </a>
                        </li>
                })}
            </ul>
        </aside>
    )
}

export default SideBar
