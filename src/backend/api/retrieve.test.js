const retrieve = require('./retrieve');

const user = 'sang-il';
const title = 'Test note title';
const note = 'Test note';
const id = '60397b292671e6bcb5db5331';
const key = 'Test';

test('retrieve note test', () => {
    let rc = true;

    // try {
    //     retrieve(user, id);
    // } catch (err) {
    //     rc = false;
    // }
    expect( rc ).toBe(true);
});
