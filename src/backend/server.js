/*  server.js
*
*/

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.use(express.static('public'));
app.use( bodyParser.json());
app.use(routes);

const port = process.env.PORT || 80;
const running = app.listen(port, () => console.log(`Server listening on port: ${port}`));

module.exports = running;