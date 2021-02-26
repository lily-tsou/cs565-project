/* list.js
*
    A function component to form a MongoDB query and execute.
*
*/

const  { dbList } = require('../db');

let list = async (user) => {

    let result = await dbList(user)
        .then((res) => { return res; })
        .catch((err) => { return console.log('dbList failed', err) });

    return result;
};

module.exports = list;