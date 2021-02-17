/* delete.js
*
    A function component to form a MongoDB query and execute.
*
*/

const  { dbDelete } = require('../db');

const del = async (id) => {

    let result = await dbDelete(id)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbDelete failed', err) });

    return result;
};

module.exports = del;