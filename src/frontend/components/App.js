/* App.js
*
*    The core module of the client.  It defines a class component of React.
*
*/

import React from 'react';
import '../styles/App.css';

const url = 'http://localhost';
const noteImg = 'https://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/notes-icon.png';
const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            note: { id: null, data: '' },
            err: null,
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonAction = this.handleButtonAction.bind(this);
        this.handleListSelect = this.handleListSelect.bind(this);
    };

    componentDidMount() {
        this.setState({ isLoading: true });
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

    handleChange(e) {
        this.setState({ note: e.target.value });
        console.log(this.state.note);
    };

    handleButtonAction(e) {
        switch(e.target.name) {
            case 'add':
                console.log('Add: ' + this.state.note.data);
                break;
            case 'edit':
                console.log('Edit: ' + this.state.note.id + ' ' + this.state.note.data);
                break;
            case 'resubmit':
                console.log('Resubmit: ' + this.state.note.id + ' ' + this.state.note.data);
                break;
            case 'delete':
                console.log('Delete: ' + this.state.note.id );
                break;                
            default:
                break;
        }
        e.preventDefault();
    };

    handleListSelect(id, data) {
        this.setState({ note: {id: id, data: data} });
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
                            {list.map(item => {
                                return <li className="noteitem" key={item._id} id={item._id} >
                                        <a onClick={() => this.handleListSelect(item._id, item.data)} href="#"><img className="noteicon" src={noteImg}/>
                                        { item.data.substr(0,6) } 
                                        </a>
                                    </li>
                            })}
                        </ul>
                    </aside>
                    <section className="grid-item grid-item3">
                        <textarea value={this.state.note.data} onChange={this.handleChange}/>
                        <div className="btn_row ">
                            <button type="button" className="btn btn_elem" onClick={this.handleButtonAction} name="add">Add</button>
                            <button type="button" className="btn btn_elem" onClick={this.handleButtonAction} name="edit">Edit</button>
                            <button type="button" className="btn btn_elem" onClick={this.handleButtonAction} name="resubmit">Resubmit</button>
                            <button type="button" className="btn btn_elem" onClick={this.handleButtonAction} name="delete">Delete</button>
                        </div>
                    </section>
                    <footer className="grid-item grid-item4">@Copyright: The NoteQuest Team </footer>
                </section>
            </main>
        )
    };
};
