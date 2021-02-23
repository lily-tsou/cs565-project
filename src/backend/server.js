/*  server.js
*
    Entry point to the application.  The module creates an express object to listen on port 80.
    Routes are added to this object which can be accessed via context strings in the URL.
    "public" is added as a static route and enables /public/index.html to always be rendered
    without an explicit context in the URL.
*
*/

const express = require('express');
const routes = require('./routes');

let startServer = () => {
    const app = express();

    app.use(express.static('public'));
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
          );
        next();
    });
    app.use(routes);
 

    const port = process.env.PORT || 80;
    const rc = app.listen(port, () => console.log(`Server listening on port: ${port}`));
    return rc.listening;  // true if server is listening
};

module.exports = startServer;
startServer();
