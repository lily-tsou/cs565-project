/* App.js
*
*    The core module of the client.  It defines a class component of React.
*
*/

import React from 'react';
import '../styles/App.css';
import NotePreview from './NotePreview';
import Search from './Search'
import {useState} from 'react';
import EditBar from './EditBar'

// const url = 'http://localhost';
const url = 'http://35.233.240.239';
const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            note: { id: null, data: '' },
            err: null,
            isLoading: false,
            searchField: '',
            readonly: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonAction = this.handleButtonAction.bind(this);
        this.handleListSelect = this.handleListSelect.bind(this);
        this.editNote = this.editNote.bind(this);

    };

    apiList() {
        fetch(url + '/list')
        .then(res => {
            if(res.status >= 300) { throw new Error(res.statusText); }
            return res.json();
        })
        .then(list => { this.setState({ list, isLoading: false }); })
        .catch(err => { 
            this.setState({ err, isLoading: false});
            console.log(err); 
        });
    };
    
    apiAdd(uri) {
        fetch(uri)
        .then(res => {
            if(res.status >= 300) { throw new Error(res.statusText); }
            return res.json();
        })
        .catch(err => { 
            console.log(err); 
        });    
    }

    apiEdit(uri) {
        fetch(uri)
        .then(res => {
            if(res.status >= 300) { throw new Error(res.statusText); }
            return res.json();
        })
        .catch(err => { 
            console.log(err); 
        });    
    }

    apiDel(uri) {
        fetch(uri)
        .then(res => {
            if(res.status >= 300) { throw new Error(res.statusText); }
            return res.json();
        })
        .catch(err => { 
            console.log(err); 
        });    
    }

    componentDidMount() {
        this.apiList();
        document.getElementById('save').disabled = true;
    };

    handleChange(e) {
        this.setState({ note: {id: this.state.note.id, data: e.target.value }});
        console.log(this.state.note);
    };

    handleButtonAction(e) {
        switch(e.target.name) {
            case 'add':
                console.log('Add: ' + this.state.note.data);
                this.apiAdd(url + '/add?note=' + this.state.note.data);
                this.apiList();
                break;
            case 'resubmit':
                console.log('Resubmit: ' + this.state.note.id + ' ' + this.state.note.data);
                this.apiEdit(url + '/edit?id=' + this.state.note.id + '&note=' + this.state.note.data );
                this.apiList();
                break;
            case 'delete':
                console.log('Delete: ' + this.state.note.id );
                this.apiDel(url + '/del?id=' + this.state.note.id);
                this.apiList();
                break;                
            default:
                break;
        }
        e.preventDefault();
    };

    findNotes(e){
        //console.log('hello ' + e);
        fetch(url + '/find?key='+e)
        .then(res => {
            if(res.status >= 300) { throw new Error(res.statusText); }
            return res.json();
        })
        .then(list => { this.setState({ list}); console.log(list) })
        .catch(err => { 
            console.log(err); 
        });
    }

    editNote(){
        document.getElementById('note-title').readOnly = false;
        document.getElementById('note-body').readOnly = false;
        this.setState({readonly: false});
        document.getElementById('editMode').disabled = true;
        document.getElementById('save').disabled = false;
        
    }

    handleListSelect(id, data) {
        this.setState({ note: {id: id, data: data} });
        this.setState({readonly: true});
        document.getElementById('note-title').readOnly = true;
        document.getElementById('note-body').readOnly = true;
        document.getElementById('editMode').disabled = false;
        document.getElementById('save').disabled = true;
    };

    render() {
        let {list, value, err, isLoading} = this.state;
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
                    <aside className="grid-item grid-item2">
                        <ul className="notelist">
                            <Search handleChange={(e) => this.findNotes(e.target.value)}/>
                            {list.map(item => {
                                return <li className="noteitem" key={item._id} id={item._id}>
                                    <a onClick={() => this.handleListSelect(item._id, item.data)} href="#"> 
                                    { <NotePreview title = {item.data}
                                      body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>} 
                                </a>
                                </li>
                            })}
                        </ul>
                    </aside>
                    <section className="grid-item grid-item3">
                        <div className = "editor">
                            {/* <div className="btn_row ">
                                <button type="button" className="btn btn_elem" onClick={this.handleButtonAction} name="add">Add</button>
                                <button type="button" className="btn btn_elem" onClick={this.handleButtonAction} name="delete">Delete</button>
                                {editSave}
                             </div> */}
                             <EditBar readonly = {this.state.readonly} editAction = {this.editNote} buttonAction = {this.handleButtonAction}/>
                            <textarea readOnly id = "note-title" value={this.state.note.data} onChange={this.handleChange}/>
                            <textarea readOnly id = "note-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </textarea>
                        </div>   
                    </section>
                    <footer className="grid-item grid-item4">@Copyright: The NoteQuest Team </footer>
                </section>
            </main>
        )
    };
};
