/*
    HomePage.test.js

    Jest unit test module.  The HomePage() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import renderer from 'react-test-renderer';
import  {HashRouter as Router, Route} from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage component test', () => {
    test('HomePage test', () => {
        let rc = true;
        try {
            const component = renderer.create(
                <Router>
                    <Route exact path="/" render={() => <HomePage user="sang-il"/>}/>
                </Router>
            );
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    });
});