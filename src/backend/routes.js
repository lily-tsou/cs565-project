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
router.get('/hello', (req, res) => {
    res.json('World');
});

router.get('/add', async (req, res) => {
    try {
        let response = await api.add(req.query.note);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/list', async (req, res) => {
    try {
        let response = await api.list();
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/retrieve', async (req, res) => {
    try {
        let response = await api.retrieve(req.query.id);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/edit', async (req, res) => {
    try {
        let response = await api.edit(req.query.id, req.query.note);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/find', async (req, res) => {
    try {
        let response = await api.find(req.query.key);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/del', async (req, res) => {
    try {
        let response = await api.del(req.query.id);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/delall', async (req, res) => {
    try {
        let response = await api.delAll();
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;
