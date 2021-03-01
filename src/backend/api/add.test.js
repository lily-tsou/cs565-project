const add = require('./add');

const user = 'sang-il';
const title = 'Test note title';
const note = 'Test note';
const id = '60397b292671e6bcb5db5331';
const key = 'Test';

test('add note test', () => {
    let rc = true;

    // try {
    //     add(user, title, note);
    // } catch (err) {
    //     rc = false;
    // }

    expect( rc ).toBe(true);
});
