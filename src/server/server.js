/*  server.js
*
    Entry point to the application.  The module creates an express object to listen on port 3000.
    Routes are added to this object which can be accessed via context strings in the URL.
    "public" is added as a static route and enables /public/index.html to always be rendered
    without an explicit context in the URL.
*
*/

import express from 'express';
import apiRouter from './routes';

export default function StartServer() {
    const app = express();

    app.use(express.static('public'));
    app.use(apiRouter);

    const port = process.env.PORT || 3000;
    const rc = app.listen(port, () => console.log(`Server listening on port: ${port}`));
    return rc.listening;  // true if server is listening
}

StartServer();
