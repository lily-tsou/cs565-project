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

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            err: null,
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(url + '/list')
        .then(res => {
            if(res.status >= 300) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(list => {
            this.setState({ list, isLoading: false });
        })
        .catch(err => { 
            this.setState({
                err,
                isLoading: false
            });
            console.log(err); 
        });
    }

    render() {
        let {list, err, isLoading} = this.state;
        if(err) {
            return (
                <div> { err.message } </div>
            );
        }
        if(isLoading) {
            return (
                <div> Loading... </div>
            );
        }
        
        return (
            <main className="container">
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"/>
                <header>
                    <h1>NoteQuest</h1>
                </header>
                <section className="grid-container">
                    <nav className="grid-item grid-item1">nav bar goes here</nav>
                    <aside className="grid-item grid-item2">
                        <ul>
                            {list.map(item => {
                                return <li key={item._id} id={item._id} >
                                        { item.data }
                                    </li>
                            })}
                        </ul>
                    </aside>
                    <section className="grid-item grid-item3">
                        note textbox goes here
                    </section>
                    <footer className="grid-item grid-item4">footer goes here</footer>
                </section>
            </main>
        )
    }
}
