/* edit.js
*
    A function component to form a MongoDB query and execute.
*
*/

const  { dbEdit } = require('../db');

const edit = async (user, id, title, note) => {
    let result = await dbEdit(user, id, title, note)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbEdit failed', err) });

    return result;
};

module.exports = edit;