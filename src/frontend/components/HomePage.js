import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import EditBar from './EditBar';
import SideBar from './SideBar';
import {apiList, apiAdd, apiEdit, apiFind, apiDel} from './Api';

const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

export default function HomePage(props) {

    let [list, setList] = useState([]);
    let [note, setNote] = useState({ id: null, data: '' });
    let [err, setErr] = useState(null);
    let [isLoading, setIsLoading] = useState(false);
    let [readOnly, setReadOnly] = useState(true);

    useEffect( async () => {
        setIsLoading(true);
        setList( await apiList() );
        setIsLoading(false);
        document.getElementById('save').disabled = true;
    }, []);

    let handleChange = (e) => {
        setNote( {id: note.id, data: e.target.value } );
    };

    let handleButtonAction = async (e) => {
        switch(e.target.name) {
            case 'add':
                console.log('Add: ' + note.data);
                await apiAdd(note.data);
                setList( await apiList() );
                break;
            case 'save':
                console.log('Edit: ' + note.id + ' ' + note.data);
                await apiEdit(note.id, note.data);
                setList( await apiList() );
                document.getElementById('save').disabled = true;
                setReadOnly(true);
                document.getElementById('editMode').disabled = false;
                break;
            case 'delete':
                console.log('Delete: ' + note.id );
                await apiDel(note.id);
                setList( await apiList() );
                break;                
            default:
                break;
        }
        e.preventDefault();
    };

    let editNote = () => {
        document.getElementById('note-title').readOnly = false;
        document.getElementById('note-body').readOnly = false;
        setReadOnly(false);
        document.getElementById('editMode').disabled = true;
        document.getElementById('save').disabled = false;
    };

    let handleListSelect = (id, data) => {
        setNote( {id: id, data: data} );
        setReadOnly(true);
        document.getElementById('note-title').readOnly = true;
        document.getElementById('note-body').readOnly = true;
        document.getElementById('editMode').disabled = false;
        document.getElementById('save').disabled = true;
    };

    let handleSearchChange = async (e) => {
        setList( await apiFind(e.target.value) );
    };

    if(err) { return (<div> { err.message } </div>); }
    if(isLoading) { return (<div> Loading... </div>); }
        
    return (
        <main className="container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <header>
                <h1>NoteQuest</h1>
            </header>
            <section className="grid-container">
                <nav className="grid-item grid-item1">
                    <ul className="navbar">
                        <li className="navitem"><a href="#">New</a></li>
                        <li className="navitem"><a href="#">Sort</a></li>
                        <li className="navitem"><a href="#">Dark Mode</a></li>
                        <li className="navitem"><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <SideBar handleSearchChange = {handleSearchChange} NoteList = {list} handleOnClick = {handleListSelect}/>
                <section className="grid-item grid-item3">
                    <div className = "editor">
                        <EditBar readOnly = {readOnly} editAction = {editNote} buttonAction = {handleButtonAction}/>
                        <textarea readOnly id = "note-title" value={note.data} onChange={handleChange}/>
                        <textarea readOnly id = "note-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </textarea>
                    </div>
                </section>
                <footer className="grid-item grid-item4">@Copyright: The NoteQuest Team </footer>
            </section>
        </main>
    )
};
