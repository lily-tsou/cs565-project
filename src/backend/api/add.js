/* add.js
*
    Provides the add function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/add') to dbAdd() which will connect 
    directly to the database service to insert a new note.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbAdd } = require('../db');

const add = async (user, title, note) => {
    if (note == undefined) { note = "This is my test note"; }

    let result = await dbAdd(user, title, note)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbAdd failed', err) });

    return result;
};

module.exports = add;