/*
    Search.test.js

    Jest unit test module.  The Search() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

describe('Search component test', () => {
    test('Search test', () => {
        let rc = true;
        try {
            const component = renderer.create(<Search/>);
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    })
})