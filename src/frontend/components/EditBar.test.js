/*
    EditBar.test.js

    Jest unit test module.  The EditBar() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import renderer from 'react-test-renderer';
import EditBar from './EditBar';

describe('EditBar component test', () => {
    test('EditBar test', () => {
        let rc = true;
        try {
            const component = renderer.create(<EditBar/>);
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    });
});
