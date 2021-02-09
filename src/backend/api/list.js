/* list.js
*
    A function component to form a MongoDB query and execute.
    The returned object is a promise object to allow for asynchronous operation.
*
*/

const  { dbList } = require('../db');

let list = async () => {
    let rc = null;

    try {
        let result = await dbList((res) => {
            console.log("In list function");
            res.forEach((note) => { console.log(note) });
        });
        console.log("after dbList returns: " + result);      
        rc = "got the list";
    } catch (err) {
        console.log("Caught error: " + err);
        rc = err;
    }

    // let responseHandler = (response) => {
    //     console.log("In response handler: ");
    //     response.forEach((note) => { console.log(note) });

    //     return "got the list";
    // };

    // let errorHandler = (error) => {
    //     return console.log('Request failed', error);
    // };

    // let result = await dbList()
    //     .then(responseHandler)
    //     .catch(errorHandler);
    return rc;
};

module.exports = list;