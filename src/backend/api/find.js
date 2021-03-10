/* find.js
*
    Provides the find function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/find') to dbFind() which will connect 
    directly to the database service to search all notes for a specific key.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbFind } = require('../db');

let find = async (user, key) => {

    let result = await dbFind(user, key)
        .then((res) => { return res; })
        .catch((err) => { return console.log('dbFind failed', err) });

    return result;
};

module.exports = find;