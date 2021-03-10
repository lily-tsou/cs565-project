/* retrieve.js
*
    Provides the retrieve function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/retrieve') to dbRetrieve() which will connect 
    directly to the database service to query an existing note based on the passed id.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbRetrieve } = require('../db');

const retrieve = async (user, id) => {

    let result = await dbRetrieve(user, id)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbRetrieve failed', err) });

    return result;
};

module.exports = retrieve;