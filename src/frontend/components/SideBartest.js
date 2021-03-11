/*
    SideBar.test.js

    Jest unit test module.  The SideBar() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import renderer from 'react-test-renderer';
import  {HashRouter as Router, Route} from 'react-router-dom'
import SideBar from './SideBar';

describe('SideBar component test', () => {
    let emptyFunc = () => {};
    test('SideBar test', () => {
        let rc = true;
        try {
            const component = renderer.create(
                // <Router>
                //     <Route exact path="/" render={() => <SideBar />}/>
                // </Router>
                <SideBar/>
            );        
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    })
})