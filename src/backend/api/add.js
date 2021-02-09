/* add.js
*
    A function component to form a MongoDB query and execute.
    The returned object is a promise object to allow for asynchronous operation.
*
*/

const  { dbAdd } = require('../db');

const add = async (note) => {
    if (note == undefined) { note = "This is my test note"; }

    try {
        let result = await dbAdd(note);
        return result;
    } catch (err) {
        console.log("Caught error: " + err);
        return err;
    }
}

module.exports = add;