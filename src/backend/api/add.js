/* add.js
*
    A function component to form a MongoDB query and execute.
    The returned object is a promise object to allow for asynchronous operation.
*
*/

const  mongoClient = require('../db').mongoClient;

const add = async (note) => {
    if (note == undefined) { note = "This is my test note"; }

    let addQuery = `Query <tdb>: ` + note;

    console.log(addQuery);  

    // return new Promise((resolve, reject) => {
    //     mongoClient.query(addQuery, (err, results) => {
    //         if (err) {
    //             return reject(err);
    //         }
    //         resolve(results);
    //     });
    // });

    return "Added: " + note;
}

module.exports = add;