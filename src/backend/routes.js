/* routes.js
*
    Creates a router object via the express.Router() factory method.
    This router object is used by express to define routes within
    the running express application.

    All new routes are created via router.get() and must define a
    context path to access.

*
*/

const express = require('express');
const api = require('./api');

const router = express.Router();

// Backend API
router.get('/api/hello', (req, res) => {
    res.json('World');
});

router.get('/api/add', async (req, res) => {
    try {
        let note = await api.add(req.query.note);
        res.json(note);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/api/list', async (req, res) => {
    try {
        let notes = await api.list();
        res.json(notes);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/api/retrieve', async (req, res) => {
    try {
        let note = await api.retrieve(req.query.id);
        res.json(note);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/api/edit', async (req, res) => {
    try {
        let note = await api.edit(req.query.id);
        res.json(note);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/api/find', async (req, res) => {
    try {
        let notes = await api.list(req.query.key);
        res.json(notes);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/api/del', async (req, res) => {
    try {
        let note = await api.del(req.query.id);
        res.json(note);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/api/delall', async (req, res) => {
    try {
        let note = await api.delAll();
        res.json(note);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;
