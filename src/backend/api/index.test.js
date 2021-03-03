const {add, list, retrieve, edit, find, del, delAll} = require('./index');

const user = 'sang-il';
const title = 'Test note title';
const note = 'Test note';
const key = 'Test';

describe('Test API round trip', () => {

    let newNoteId = '';
    test('add  test', async () => {
        let rc = true;
        try {
            let results = await add(user, title, note);
            newNoteId = results.insertedId;
        } catch (err) {
            rc = false;
        }
        console.log("results: " + newNoteId);
        expect( rc ).toBe(true);
    });

    test('list  test', async () => {
        let rc = true;
        try {
            let results = await list(user);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('retrieve  test', async () => {
        let rc = true;
        try {
            let results = await retrieve(user, newNoteId);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('edit  test', async () => {
        let rc = true;
        try {
            let results = await edit(user, newNoteId, title + ' edited', note + ' edited');
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });
    
    test('find  test', async () => {
        let rc = true;
        try {
            let results = await find(user, key);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });
    
    test('del test', async () => {
        let rc = true;
        try {
            let results = await del(user, newNoteId);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

});
