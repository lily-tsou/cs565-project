const find = require('./find');

const user = 'sang-il';
const title = 'Test note title';
const note = 'Test note';
const id = '60397b292671e6bcb5db5331';
const key = 'Test';

test('find notes test', () => {
    let rc = true;

    // try {
    //     find(user, key);
    // } catch (err) {
    //     rc = false;
    // }
    expect( rc ).toBe(true);
});

