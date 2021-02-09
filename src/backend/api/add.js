/* add.js
*
    A function component to form a MongoDB query and execute.
*
*/

const  { dbAdd } = require('../db');

const add = async (note) => {
    if (note == undefined) { note = "This is my test note"; }

    let result = await dbAdd(note)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbAdd failed', err) });

    return result;
};

module.exports = add;