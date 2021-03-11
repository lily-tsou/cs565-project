/*
    ContactCard.test.js

    Jest unit test module.  The ContactCard() component is imported and rendered via react-test-renderer.

    Rendered results are not spot checked but rather we rely on exceptions to indicate something went 
    wrong in rendering the target component.
    
*/

import React from 'react';
import renderer from 'react-test-renderer';
import ContactCard from './ContactCard';

describe('ContactCard component test', () => {
    test('ContactCard test', () => {
        let rc = true;
        try {
            const component = renderer.create(<ContactCard/>);
        } catch {
            rc = false;
        }
        expect(rc).toBe(true);
    })
})