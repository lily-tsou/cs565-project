const {dbAdd, dbList, dbRetrieve, dbEdit, dbFind, dbDelete, dbDeleteAll} = require('./index');

const user = 'sang-il';
const title = 'Test note title';
const note = 'Test note';
const id = '60397b292671e6bcb5db5331';
const key = 'Test';

test('dbAdd  test', () => {
    let rc = true;
    try {
        let results = dbAdd(user, title, note);
    } catch (err) {
        rc = false;
    }
    expect( rc ).toBe(true);
});

test('dbList  test', () => {
    let rc = true;
    try {
        let results = dbList(user);
    } catch (err) {
        rc = false;
    }
    expect( rc ).toBe(true);
});

test('dbRetrieve  test', () => {
    let rc = true;
    try {
        let results = dbRetrieve(user, id);
    } catch (err) {
        rc = false;
    }
    expect( rc ).toBe(true);
});

test('dbEdit  test', () => {
    let rc = true;
    try {
        let results = dbEdit(user, id, title, note);
    } catch (err) {
        rc = false;
    }
    expect( rc ).toBe(true);
});

test('dbFind  test', () => {
    let rc = true;
    try {
        let results = dbFind(user, key);
    } catch (err) {
        rc = false;
    }
    expect( rc ).toBe(true);
});

test('dbDel test', () => {
    let rc = true;
    try {
        let results = dbDelete(user, id);
    } catch (err) {
        rc = false;
    }
    expect( rc ).toBe(true);
});