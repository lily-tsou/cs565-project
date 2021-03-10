/*
    HomePage.js
    The HomePage react component.  This encapsulates the SideBar, Editor and Footer components.
    As this component is the direct parent of SideBar and Editor, many of the button actions
    are handled here as a logical place to coordinate the props flow between them. 
*/

import React, { useState, useEffect } from 'react';

import '../styles/App.css';
import Editor from './Editor';
import SideBar from './SideBar';
import Footer from './Footer';
import {apiList, apiAdd, apiEdit, apiFind, apiDel} from './Api';

const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';
const sampleNote = 'Welcome to NoteQuest!  Click on a note or create a new note to begin.';

function HomePage(props) {

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
        //only happening on mount..
        if(width <= 768){
            setHideEditor(true);
            setHideSideBar(false);
            setBackButton(true);
        }
        //but happening every time??
        window.addEventListener("resize", handleWindowResize);
    }, []);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        if(window.innerWidth <= 768){
            if(hideEditor){
                setHideEditor(true);
                setHideSideBar(false);
            }
            else{
                setHideEditor(false);
                setHideSideBar(true);
            }
            setBackButton(true);
        }
        else{
            setHideEditor(false);
            setHideSideBar(false);
            setBackButton(false);
        }
    }

    let titleChange = (e) => {
        setCurrent( {id: current.id, title: e.target.value, note: current.note } );
    };

    let noteChange = (e) => {
        setCurrent( {id: current.id, title: current.title, note: e.target.value } );
    };

    let searchChange = async (e) => {
        setList( await apiFind(user, e.target.value) );
    };    

    let listSelect = (id, title, note) => {
        setCurrent( {id: id, title: title, note: note} );
        setReadOnly(true);
        document.getElementById('note-title').readOnly = true;
        document.getElementById('note-body').readOnly = true;
        document.getElementById('editMode').disabled = false;
        document.getElementById('save').disabled = true;
        if(hideEditor === true) {
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

    let addAction = async() => {
        let newNote = "New Note"
        const res = await apiAdd(user, newNote, "");
        setList( await apiList(user) );
        openNew(res.insertedId, newNote, "");
    };

    let editAction = () => {
        document.getElementById('note-title').readOnly = false;
        document.getElementById('note-body').readOnly = false;
        setReadOnly(false);
        document.getElementById('editMode').disabled = true;
        document.getElementById('save').disabled = false;
    };

    let saveAction = async () => {
        console.log('Edit: ' + current.id + ' ' + current.title);
        document.getElementById('save').disabled = true;
        setReadOnly(true);
        document.getElementById('editMode').disabled = false;
        document.getElementById('note-title').readOnly = true;
        document.getElementById('note-body').readOnly = true;
        await apiEdit(user, current.id, current.title, current.note);
        setList( await apiList(user) );
    };

    let deleteAction = async () => {
        let result = confirm("Are you sure you want to delete this note?");
        if (result) {
            console.log('Delete: ' + current.id );
            await apiDel(user, current.id);
            setList( await apiList(user) );
        }           
    };

    let backAction = () =>{
        setHideEditor(true);
        setHideSideBar(false);
    };

    if(err) { return (<div> { err.message } </div>); }
    if(isLoading) { return (<div> Loading... </div>); }

    return (
        <main className="my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <section className="grid-container">
                <SideBar searchChange = {searchChange} noteList = {list} listSelect = {listSelect} addAction = {addAction} isHidden = {hideSideBar}/>
                <Editor readOnly = {readOnly} editAction = {editAction} saveAction = {saveAction} title = {current.title} body = {current.note} 
                    noteChange = {noteChange} titleChange = {titleChange} isHidden = {hideEditor} backButton = {backButton} backAction = {backAction}
                    deleteAction = {deleteAction}/>
                <Footer/>
            </section>
        </main>
    )
};

export default HomePage