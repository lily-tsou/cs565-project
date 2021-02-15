/* App.js
*
    The core module of the client.  It defines a class component of React.
    Fetching of data is done asynchronously via componentDidMount() which 
    fetches via context routes defined in the server.  All response data
    is stored as a React state.

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
            value: ' ... your note goes here ...',
            err: null,
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

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
        console.log("handleChange");
        this.setState({ value: e.target.value });
        console.log(e.target.value);
    };

    handleSubmit(e) {
        alert('A note was submitted: ' + this.state.value);
        e.preventDefault();
    };

    handleClick(e) {
        console.log("handleClick: " + e);
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
                                        <a onClick={this.handleClick} href="#"><img className="noteicon" src={noteImg}/>
                                        { item.data.substr(0,6) } 
                                        </a>
                                    </li>
                            })}
                        </ul>
                    </aside>
                    <section className="grid-item grid-item3">
                        <form onSubmit={this.handleSubmit}>
                            <textarea name="notebody" value={this.state.value} 
                              onChange={(e) => this.handleChange(e)}
                            />
                            <div className="btn_row ">
                                <input type="submit" className="btn btn_elem" value="Add" />
                                <input type="submit" className="btn btn_elem" value="Edit" />
                                <input type="submit" className="btn btn_elem" value="Resubmit" />
                                <input type="submit" className="btn btn_elem" value="Delete" />
                            </div>
                        </form>
                    </section>
                    <footer className="grid-item grid-item4">@Copyright: The NoteQuest Team </footer>
                </section>
            </main>
        )
    };
};
