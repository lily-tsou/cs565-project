/*  server.js
*
*/

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const app = express();

app.use(express.static('public'));
app.use( bodyParser.json());

let startServer = () => {
    app.post('/add', async (req, res) => {
        try {
            const {user, title, note} = req.body;
            let response = await api.add(user, title, note);
            res.json(response);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
    
    app.post('/list', async (req, res) => {
        try {
            const {user} = req.body;
            let response = await api.list(user);
            res.json(response);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
    
    app.post('/retrieve', async (req, res) => {
        try {
            const {user, id} = req.body;
            let response = await api.retrieve(user, id);
            res.json(response);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
    
    app.put('/edit', async (req, res) => {
        try {
            const {user, id, title, note} = req.body;
            let response = await api.edit(user, id, title, note);
            res.json(response);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
    
    app.post('/find', async (req, res) => {
        try {
            const {user, key} = req.body;
            let response = await api.find(user, key);
            res.json(response);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
    
    app.delete('/del', async (req, res) => {
        try {
            const {user, id} = req.body;
            let response = await api.del(user, id);
            res.json(response);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
    
    app.delete('/delall', async (req, res) => {
        try {
            const {user} = req.body;
            let response = await api.delAll(user);
            res.json(response);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
    
    const port = process.env.PORT || 80;
    const rc = app.listen(port, () => console.log(`Server listening on port: ${port}`));
    
    return rc;
}

module.exports = startServer;
startServer();