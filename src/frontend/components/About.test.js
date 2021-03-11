/*
    About.test.js

    Jest unit test module.  The About() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import renderer from 'react-test-renderer';
import  {HashRouter as Router, Route} from 'react-router-dom';
import About from './About';

describe('About component test', () => {
    test('About test', () => {
        let rc = true;
        try {
            const component = renderer.create(
                    <Router>
                        <Route exact path="/About" render={() => <About/>}/>
                    </Router>
                );
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    })
})