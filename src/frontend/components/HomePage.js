import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import EditBar from './EditBar';
import SideBar from './SideBar';
import Navbar from './Navbar'
import {apiList, apiAdd, apiEdit, apiFind, apiDel} from './Api';

const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';
const sampleNote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default function HomePage(props) {

    let [user, setUser] = useState('');
    let [list, setList] = useState([]);
    let [current, setCurrent] = useState({ id: null, title: '', note: sampleNote });
    let [err, setErr] = useState(null);
    let [isLoading, setIsLoading] = useState(false);
    let [readOnly, setReadOnly] = useState(true);

    useEffect( async () => {
        setUser(props.user);  // this doesn't appear to stick, why??
        setIsLoading(true);
        setList( await apiList(props.user) );
        setIsLoading(false);
        document.getElementById('save').disabled = true;
    }, []);

    let handleTitleChange = (e) => {
        setCurrent( {id: current.id, title: e.target.value, note: current.note } );
    };

    let handleNoteChange = (e) => {
        setCurrent( {id: current.id, title: current.title, note: e.target.value } );
    };

    let handleButtonAction = async (e) => {
        switch(e.target.name) {
            case 'add':
                console.log('Add: ' + current.title);
                await apiAdd(user, current.title, current.note);
                setList( await apiList(user) );
                break;
            case 'save':
                console.log('Edit: ' + current.id + ' ' + current.title);
                await apiEdit(user, current.id, current.title, current.note);
                document.getElementById('save').disabled = true;
                setReadOnly(true);
                document.getElementById('editMode').disabled = false;
                setList( await apiList(user) );
                break;
            case 'delete':
                console.log('Delete: ' + current.id );
                await apiDel(user, current.id);
                setList( await apiList(user) );
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

    let handleListSelect = (id, title, note) => {
        setCurrent( {id: id, title: title, note: note} );
        setReadOnly(true);
        document.getElementById('note-title').readOnly = true;
        document.getElementById('note-body').readOnly = true;
        document.getElementById('editMode').disabled = false;
        document.getElementById('save').disabled = true;
    };

    let openNew = (id, title, note) => {
        setCurrent( {id: id, title: title, note: note} );
        setReadOnly(false);
        document.getElementById('note-title').readOnly = false;
        document.getElementById('note-body').readOnly = false;
        document.getElementById('editMode').disabled = true;
        document.getElementById('save').disabled = false;
        document.getElementById('note-body').placeholder = "Type your note here";
    };

    let handleSearchChange = async (e) => {
        setList( await apiFind(user, e.target.value) );
    };

    let AddButton = async() => {
        console.log("add");
        const res = await apiAdd(user, "New note 2", "");
        setList( await apiList(user) );
        console.log(res);
        openNew(res.insertedId, "New Note", "");
    }

    if(err) { return (<div> { err.message } </div>); }
    if(isLoading) { return (<div> Loading... </div>); }
        
    return (
        <main className="container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <header>
                <h1>NoteQuest</h1>
            </header>
            <section className="grid-container">
                <div className = "grid-item grid-item1">{<Navbar/>}</div>
                <SideBar handleSearchChange = {handleSearchChange} NoteList = {list} handleOnClick = {handleListSelect} AddAction = {AddButton}/>
                <section className="grid-item grid-item3">
                    <div className = "editor">
                        <EditBar readOnly = {readOnly} editAction = {editNote} buttonAction = {handleButtonAction}/>
                        <textarea readOnly id = "note-title" value={current.title} onChange={handleTitleChange}/>
                        <textarea readOnly id = "note-body" value={current.note} onChange={handleNoteChange}/>
                    </div>
                </section>
                <footer className="grid-item grid-item4">@Copyright: The NoteQuest Team </footer>
            </section>
        </main>
    )
};
