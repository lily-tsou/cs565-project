/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import '../styles/App.css';
import  {HashRouter as Router, Route} from 'react-router-dom';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            user: '',
            version: ''
        };
    };

    componentDidMount() {
        this.setState({user: "sang-il"});
        this.setState({version: this.props.version});
    };

    render() {
        return(
            <Router>
                <h1 className="visually-hidden">NoteQuest</h1>
                <NavBar/>
                <Route exact path="/" render={() => <HomePage user={this.state.user}/>}/>
                <Route exact path="/About" render={() => <About version={this.state.version}/>}/>
                <Route exact path="/Contact" render={() => <Contact/>}/>
            </Router>
        );
    };
};

export default App;
