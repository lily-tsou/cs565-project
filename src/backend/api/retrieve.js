/* retrieve.js
*
    A function component to form a MongoDB query and execute.
*
*/

const  { dbRetrieve } = require('../db');

const retrieve = async (id) => {

    let result = await dbRetrieve(id)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbRetrieve failed', err) });

    return result;
};

module.exports = retrieve;