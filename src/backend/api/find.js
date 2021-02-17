/* find.js
*
    A function component to form a MongoDB query and execute.
*
*/

const  { dbFind } = require('../db');

let find = async (key) => {

    let result = await dbFind(key)
        .then((res) => { return res; })
        .catch((err) => { return console.log('dbFind failed', err) });

    return result;
};

module.exports = find;