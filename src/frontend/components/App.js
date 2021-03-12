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
import  {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            user: '',
            version: '',
            dark: false
        };
        this.switchTheme = this.switchTheme.bind(this);
    };

    switchTheme() {
        if(!this.state.dark){
            document.documentElement.setAttribute('data-theme', 'dark');
            this.setState({dark: true});
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            this.setState({dark: false});
        }
    };

    componentDidMount() {
        this.setState({user: "sang-il"});
        this.setState({version: this.props.version});
        this.state.dark ? document.documentElement.setAttribute('data-theme', 'dark')
            : document.documentElement.setAttribute('data-theme', 'light');    
    };

    render() {
        return(
            <Router>
                <NavBar dark={this.state.dark} switchTheme={this.switchTheme}/>
                <Route exact path="/" render={() => <HomePage user={this.state.user}/>}/>
                <Route exact path="/About" render={() => <About version={this.state.version}/>}/>
                <Route exact path="/Contact" render={() => <Contact/>}/>
            </Router>
        );
    };
};

export default App;
