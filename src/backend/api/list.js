/* list.js
*
    Provides the list function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/list') to dbList() which will connect 
    directly to the database service to query all notes in the collection.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
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