/*  server.js
*
    Entry point to the application.  The module creates an express object to listen on port 3000.
    Routes are added to this object which can be accessed via context strings in the URL.
    "public" is added as a static route and enables /public/index.html to always be rendered
    without an explicit context in the URL.
*
*/

// Switched from ES modules to CommonJS
// import express from 'express';
// import apiRouter from './routes';
const express = require('express');
const apiRouter = require('./routes');

// Switched from ES modules to CommonJS
// export default function StartServer() {
function StartServer() {
    const app = express();

    app.use(express.static('public'));
    app.use(apiRouter);

    const port = process.env.PORT || 80;
    const rc = app.listen(port, () => console.log(`Server listening on port: ${port}`));
    return rc.listening;  // true if server is listening
}

module.exports = StartServer;
StartServer();
