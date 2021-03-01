/* index.js
*
    Handles incoming API requests
*
*/

const add = require('./add');
const list = require('./list');
const retrieve = require('./retrieve');
const edit = require('./edit');
const find = require('./find');
const del = require('./delete');
const delAll = require('./deleteall');

module.exports = { add, list, retrieve, edit, find, del, delAll };