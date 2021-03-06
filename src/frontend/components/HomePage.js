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
import {apiList, apiAdd, apiEdit, apiFind, apiDel} from './Api';
import Loader from "react-loader-spinner";

const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';
const sampleNote = 'Welcome to NoteQuest!  Click on a note or create a new note to begin.';
const deletedNote = 'Looks like you do not have any saved notes. Please create a new note!';

function HomePage(props) {

    let [list, setList] = useState([]);
    let [current, setCurrent] = useState({ id: null, title: '', note: sampleNote });
    let [isLoading, setIsLoading] = useState(false);
    let [readOnly, setReadOnly] = useState(true);
    let [width, setWidth] = useState(window.innerWidth);
    let [hideEditor, setHideEditor] = useState(false);
    let [hideSideBar, setHideSideBar] = useState(false);
    let [backButton, setBackButton] = useState(false);
    let [onEditor, setOnEditor] = useState(false);

    useEffect( async () => {
        setIsLoading(true);
        setList( await apiList(props.user) );
        setIsLoading(false);
        document.getElementById('save').disabled = true;
        if(width <= 768){
            if(!onEditor){
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
        window.addEventListener("resize", handleWindowResize);
    }, [hideEditor, width]);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    let titleChange = (e) => {
        setCurrent( {id: current.id, title: e.target.value, note: current.note } );
    };

    let noteChange = (e) => {
        setCurrent( {id: current.id, title: current.title, note: e.target.value } );
    };

    let searchChange = async (e) => {
        setList( await apiFind(props.user, e.target.value) );
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
            setOnEditor(true)
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
        if(hideEditor === true) {
            setHideEditor(false)
            setHideSideBar(true)
            setOnEditor(true)
            setReadOnly(true)
        }
    };

    let addAction = async() => {
        let newNote = "New Note"
        const res = await apiAdd(props.user, newNote, "");
        setList( await apiList(props.user) );
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
        await apiEdit(props.user, current.id, current.title, current.note);
        setList( await apiList(props.user) );
    };

    let deleteAction = async () => {
        let result = confirm("Are you sure you want to delete this note?");
        if (result) {
            console.log('Delete: ' + current.id );
            await apiDel(props.user, current.id);
            setList( await apiList(props.user) );
            if(width > 768){
                if(list.length === 1)
                    setCurrent( {id: null, title: "", note: deletedNote} );
                else{

                    if(list[0]._id === current.id)
                        setCurrent( {id: list[1]._id, title: list[1].title, note: list[1].note} );
                    else
                        setCurrent( {id: list[0]._id, title: list[0].title, note: list[0].note} );
                }
            }
            else{
                setHideEditor(true);
                setHideSideBar(false);
                setOnEditor(false);
            }
        }           
    };

    let backAction = () =>{
        setHideEditor(true);
        setHideSideBar(false);
        setOnEditor(false);
    };

    if(isLoading) { 
        return (
            <main className="spinner">
                <h1 className="visually-hidden">NoteQuest</h1>
                <Loader
                    type="Oval"
                    color="#962eff"
                    height={200}
                    width={200}
                    timeout={3000} //3 secs
                />
            </main>
        );
    }

    return (
        <div className="my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <header>
                <h1 className="visually-hidden">NoteQuest</h1>
            </header>
            <section className="grid-container">
                <SideBar searchChange={searchChange} noteList={list} listSelect={listSelect} addAction={addAction} isHidden={hideSideBar}/>
                <Editor readOnly={readOnly} editAction={editAction} saveAction={saveAction} title={current.title} body={current.note} 
                    noteChange={noteChange} titleChange={titleChange} isHidden={hideEditor} backButton={backButton} backAction={backAction}
                    deleteAction={deleteAction}/>
            </section>
        </div>
    );
};

export default HomePage;
