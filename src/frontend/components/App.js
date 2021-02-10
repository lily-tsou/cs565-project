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

        // // get parms from the user
        // const query = new URLSearchParams(window.location.search);
        // let note = query.get('note');
        // if (note == null) { note = 'My test note';}

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
            this.setState({
                list,
                isLoading: false
            });
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
                <h1 className="text-primary text-center">NoteQuest</h1>
                    <section>
                        <ul>
                            {list.map(item => {
                                return <li id={item._id} >
                                        { item.data }
                                    </li>
                            })}
                        </ul>
                    </section>
            </main>
        )
    }
}
