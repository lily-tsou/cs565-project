/*
    Footer.test.js

    Jest unit test module.  The Footer() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer component test', () => {
    test('Footer test', () => {
        let rc = true;
        try {
            const component = renderer.create(<Footer/>);
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    });
});
