/*
    Editor.test.js

    Jest unit test module.  The Editor() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import renderer from 'react-test-renderer';
import Editor from './Editor';

describe('Editor component test', () => {
    test('Editor test', () => {
        let rc = true;
        try {
            const component = renderer.create(<Editor/>);
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    });
});