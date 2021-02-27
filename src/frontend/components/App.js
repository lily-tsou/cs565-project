/* App.js
*
*    The core module of the client.  It defines a class component of React.
*
*/

import React from 'react';
import HomePage from './HomePage'
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            user: '',
        };
    };

    render() {
        let page;

        if(this.state.loggedIn === true)
            page = <HomePage user='sang-il' />
        
        else
            page = <p> Hello </p>

        return(
            <div>
                {page}
            </div>
        )
    };
};
