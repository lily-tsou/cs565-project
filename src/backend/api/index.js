/* index.js
*
    The entry point to the api module.  This simply collects all the api functions together and exports.
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