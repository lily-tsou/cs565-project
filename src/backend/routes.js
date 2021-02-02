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

// Frontend
// router.get('/', (req, res) => {
//     res.sendFile('index.html', { root: __dirname + '/../frontend'});
// });

// Backend API
router.get('/api/hello', (req, res) => {
    res.json('World');
});

router.get('/api/add_note', async (req, res) => {
    try {
        let addNote = await api.add(req.query.note);
        console.log("Adding: " + req.query.note);
        res.json(addNote);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

module.exports = router;
