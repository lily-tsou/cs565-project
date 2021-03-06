import React, { useState, useEffect } from 'react';

import '../styles/App.css';
import Navbar from './Navbar';
import Editor from './Editor';
import SideBar from './SideBar';
import Footer from './Footer';
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
    let [width, setWidth] = useState(window.innerWidth);
    let [hideEditor, setHideEditor] = useState(false);
    let [hideSideBar, setHideSideBar] = useState(false);
    let [backButton, setBackButton] = useState(false);

    useEffect( async () => {
        setUser(props.user);  // this doesn't appear to stick, why??
        setIsLoading(true);
        setList( await apiList(props.user) );
        setIsLoading(false);
        document.getElementById('save').disabled = true;
        if(width <= 768){
            setHideEditor(true);
            setHideSideBar(false);
            setBackButton(true);
        }
        window.addEventListener("resize", handleWindowResize);
        console.log(width);
    }, []);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        if(window.innerWidth <= 768){
            setHideEditor(true);
            setHideSideBar(false);
            setBackButton(true);
        }
        else{
            setHideEditor(false);
            setHideSideBar(false);
            setBackButton(false);
        }
        console.log("resized " + window.innerWidth);
    }

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
                document.getElementById('save').disabled = true;
                setReadOnly(true);
                document.getElementById('editMode').disabled = false;
                document.getElementById('note-title').readOnly = true;
                document.getElementById('note-body').readOnly = true;
                await apiEdit(user, current.id, current.title, current.note);
                setList( await apiList(user) );
                break;
            case 'delete':
                let result = confirm("Are you sure you want to delete this note?");
                if (result) {
                    console.log('Delete: ' + current.id );
                    await apiDel(user, current.id);
                    setList( await apiList(user) );
                    break;      
                }          
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
        if(hideEditor === true){
            setHideEditor(false)
            setHideSideBar(true)
        }
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
        let newNote = "New Note"
        console.log("add");
        const res = await apiAdd(user, newNote, "");
        setList( await apiList(user) );
        console.log(res);
        openNew(res.insertedId, newNote, "");
    }

    let backClick = () =>{
        setHideEditor(true);
        setHideSideBar(false);
    }

    if(err) { return (<div> { err.message } </div>); }
    if(isLoading) { return (<div> Loading... </div>); }

    return (
        <main className="my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <section className="grid-container">
                <Navbar/>
                <SideBar handleSearchChange = {handleSearchChange} NoteList = {list} handleOnClick = {handleListSelect} AddAction = {AddButton} isHidden = {hideSideBar}/>
                <Editor editReadOnly = {readOnly} editNoteAction = {editNote} buttonAction = {handleButtonAction} title = {current.title} body = {current.note} 
                handleNoteChange = {handleNoteChange} handleTitleChange = {handleTitleChange} isHidden = {hideEditor} backButton = {backButton} backClick = {backClick}/>
                <Footer/>
            </section>
        </main>
    )

};
