/* deleteall.js
*
    A function component to form a MongoDB query and execute.
*
*/

const  { dbDeleteAll } = require('../db');

const delAll = async (user) => {

    let result = await dbDeleteAll(user)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbDeleteAll failed', err) });

    return result;
};

module.exports = delAll;