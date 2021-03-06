import  {apiAdd, apiList, apiEdit, apiFind, apiDel} from './Api';
global.fetch = require('jest-fetch-mock');

const user = 'sang-il';
const title = 'Frontend API test note title';
const note = 'Frontend API test note';
const key = 'Test';

describe('Frontend API test round trip', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    let newNoteId = '';
    const onResponse = jest.fn();
    const onError = jest.fn();
    
    test('apiAdd  test', async () => {
        fetch.mockResponseOnce(JSON.stringify({ id: "xyz123" }));
        let rc = true;
        try {
            let result = await apiAdd(user, title, note);
            newNoteId = result.id;
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('apiList test', async () => {
        fetch.mockResponseOnce(JSON.stringify([{ _id: newNoteId, user: user, title: title, note: note }]));
        let rc = true;
        try {
            let result = await apiList(user);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('apiEdit test', async () => {
        fetch.mockResponseOnce(JSON.stringify({ _id: newNoteId, user: user, title: title, note: note }));
        let rc = true;
        try {
            let results = await apiEdit(user, newNoteId, title + ' edited', note + ' edited');
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });
    
    test('apiFind test', async () => {
        fetch.mockResponseOnce(JSON.stringify([{ _id: newNoteId, user: user, title: title, note: note }]));
        let rc = true;
        try {
            let results = await apiFind(user, key);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });
    
    test('apiDel test', async () => {
        fetch.mockResponseOnce(JSON.stringify({ ok: 1 }));
        let rc = true;
        try {
            let results = await apiDel(user, newNoteId);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

});
