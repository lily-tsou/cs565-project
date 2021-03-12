/*
    routes.js

    The routes module which defines a separate route for all endpoints which the Express
    server is listening for.

    Each route is defined via the Express router object.  The http method needs to be provided
    in each case as well as the context path and callback to handle the request.  Note that the corresponding
    route will only respond to requests that matches both the method type AND the context path.

    Defining the callbacks as async and calling the downstream functions with await is critical here due 
    to the asynchronous nature of http request/responses.
    
*/

const express = require('express');
const api = require('./api');
const router = express.Router();
const path = require('path');

router.get('/hello', (req, res, next) => {
    res.json('World');
});

router.get('/|about|contact', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
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