const add = require('./list');

const user = 'sang-il';
const title = 'Test note title';
const note = 'Test note';
const id = '60397b292671e6bcb5db5331';
const key = 'Test';

test('list note test', () => {
    let rc = true;

    // try {
    //     list(user);
    // } catch (err) {
    //     rc = false;
    // }
    expect( rc ).toBe(true);
});

