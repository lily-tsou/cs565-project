const express = require('express');
const api = require('./api');
const router = express.Router();

router.get('/hello', (req, res, next) => {
    res.json('World');
});

router.post('/add', async (req, res) => {
    try {
        const {user, title, note} = req.body;
        let response = await api.add(user, title, note);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/list', async (req, res) => {
    try {
        const {user} = req.body;
        let response = await api.list(user);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/retrieve', async (req, res) => {
    try {
        const {user, id} = req.body;
        let response = await api.retrieve(user, id);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/edit', async (req, res) => {
    try {
        const {user, id, title, note} = req.body;
        let response = await api.edit(user, id, title, note);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/find', async (req, res) => {
    try {
        const {user, key} = req.body;
        let response = await api.find(user, key);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/del', async (req, res) => {
    try {
        const {user, id} = req.body;
        let response = await api.del(user, id);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/delall', async (req, res) => {
    try {
        const {user} = req.body;
        let response = await api.delAll(user);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;