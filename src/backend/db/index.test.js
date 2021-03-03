const {dbAdd, dbList, dbRetrieve, dbEdit, dbFind, dbDelete, dbDeleteAll} = require('./index');

const user = 'sang-il';
const title = 'Test note title';
const note = 'Test note';
const key = 'Test';

describe('Test db API round trip', () => {

    let newNoteId = '';
    test('dbAdd  test', async () => {
        let rc = true;
        try {
            let results = await dbAdd(user, title, note);
            newNoteId = results.insertedId;
        } catch (err) {
            rc = false;
        }
        console.log("results: " + newNoteId);
        expect( rc ).toBe(true);
    });

    test('dbList  test', async () => {
        let rc = true;
        try {
            let results = await dbList(user);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('dbRetrieve  test', async () => {
        let rc = true;
        try {
            let results = await dbRetrieve(user, newNoteId);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('dbEdit  test', async () => {
        let rc = true;
        try {
            let results = await dbEdit(user, newNoteId, title + ' edited', note + ' edited');
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });
    
    test('dbFind  test', async () => {
        let rc = true;
        try {
            let results = await dbFind(user, key);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });
    
    test('dbDel test', async () => {
        let rc = true;
        try {
            let results = await dbDelete(user, newNoteId);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

});
