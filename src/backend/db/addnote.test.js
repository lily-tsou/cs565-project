// Switched from ES modules to CommonJS
// import addNote from './addnote';
// import { Connection } from './index';

const addNode = require('./addnote');
const { Connection } = require('./index');

test('add_note test', () => {
    let rc = true;

    // this gives open handle error in jest due to Connection.connect()
    try {
        addNote.all("Test note 1");
        Connection.destroy();
    } catch (err) {
        rc = false;
    }

    expect( rc ).toBe(true);
});

