/* 
    routes.test.js

    Jest tests for routes module.  In most of the tests, the response code is checked as the expected result.

*/

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const request = require('supertest');

const app = express();
app.use( bodyParser.json());
app.use(routes);

const user = 'sang-il';
const title = 'Test note title';
const note = 'Test note';
const key = 'Test';

describe('Test router endpoint round trip', () => {
    let newNoteId = '';

    test('/hello', async () => {
        const { body } = await request(app)
            .get('/hello')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('POST /add test', async () => {
        const {body} = await request(app)
            .post('/add')
            .send({user: user, title: title, note: note})
            .set('Accept', 'application/json');

        newNoteId = body.insertedId;
        expect(body.result.ok).toBe(1);
    });

    test('POST /list test', async () => {
        const result = await request(app)
            .post('/list')
            .send({user: user})
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('POST /retrieve test', async () => {
        const result = await request(app)
            .post('/retrieve')
            .send({user: user, id: newNoteId})
            .set('Accept', 'application/json')
            .expect(200);

    });

    test('PUT /edit test', async () => {
        const result = await request(app)
            .put('/edit')
            .send({user: user, id: newNoteId, title: title + ' edited', note: note + ' edited'})
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('POST /find test', async () => {
        const result = await request(app)
            .post('/find')
            .send({user: user, key: key})
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('DELETE /del test', async () => {
        const result = await request(app)
            .delete('/del')
            .send({user: user, id: newNoteId})
            .set('Accept', 'application/json')
            .expect(200);
    });

});
