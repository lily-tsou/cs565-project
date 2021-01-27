/* App.js
*
    The core module of the client.  It defines a class component of React.
    Fetching of data is done asynchronously via componentDidMount() which 
    fetches via context routes defined in the server.  All response data
    is stored as a React state.

*
*/

import React, { Component } from 'react';
import '../styles/App.css';

export default class App extends Component {

    constructor(props) {
        super(props);

        const query = new URLSearchParams(window.location.search);
        let note = query.get('note');
        if (note == null) { note = 'My test note';}  // add a default value

        this.state = {
            add_note: [],
            note: note
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch('/api/add_note?note=' + this.state.note);
            if (!res.ok) {
                throw Error(res.statusText);
            }
            const json = await res.json();
            this.setState({ add_note: json });
        } catch (err) {
            console.log(err);
        }
    }

    render() {

         return (
            <main className="container">
                <h1 className="text-primary text-center">Galaxy Note</h1>

                <h2>This is in App.js</h2>

            </main>
        )
    }
}
