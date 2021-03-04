/* App.js
*
*    The core module of the client.  It defines a class component of React.
*
*/
import React from 'react';
import HomePage from './HomePage'
import About from './About'
import Contact from './Contact'
import  {HashRouter as Router, Route} from 'react-router-dom'
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            user: '',
        };
    }

    render() {
        return(
        <Router>
            <Route exact path="/" render={() => <HomePage user="sang-il"/>}/>
            <Route exact path="/About" render={() => <About/>}/>
            <Route exact path="/Contact" render={() => <Contact/>}/>
        </Router>
        )
    };
};
