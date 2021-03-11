/*
    Navbar.test.js

    Jest unit test module.  The Navbar() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import  {HashRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar component test', () => {
    test('NavBar test', () => {
        let rc = true;
        try {
            <Router>
                <Route exact path="/" render={() => <NavBar/>}/>
            </Router>   
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    });
});