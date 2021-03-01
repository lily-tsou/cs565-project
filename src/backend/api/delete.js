/* delete.js
*
    A function component to form a MongoDB query and execute.
*
*/

const  { dbDelete } = require('../db');

const del = async (user, id) => {

    let result = await dbDelete(user, id)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbDelete failed', err) });

    return result;
};

module.exports = del;