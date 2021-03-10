/* edit.js
*
    Provides the edit function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.put('/edit') to dbEdit() which will connect 
    directly to the database service to modify an existing note.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
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