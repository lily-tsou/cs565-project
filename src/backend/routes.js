/* routes.js
*
    Creates a router object via the express.Router() factory method.
    This router object is used by express to define routes within
    the running express application.

    All new routes are created via router.get() and must define a
    context path to access.

*
*/

// Switched from ES modules to CommonJS
// import express from 'express';
// import DB from './db';
const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/add_note', async (req, res) => {
    try {
        let add_note //= await DB.add_note.all(req.query.note);
        res.json(add_note);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

// Switched from ES modules to CommonJS
// export default router;
module.exports = router;
