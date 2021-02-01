/* add_note.js
*
    A function component to form a MongoDB query and execute.
    It imports the connection object from index.js.
    The returned object is a promise object to allow for asynchronous operation.
*
*/

// Switched from ES modules to CommonJS
// import { Connection } from './index';

const { Connection } = require('./index');

// Switched from ES modules to CommonJS
// export const all = async (note) => {
const all = async (note) => {
    if (note == undefined) { note = "This is my test note"; }

    let add_query = `<tdb>`;

    console.log(add_query);  

    return new Promise((resolve, reject) => {
        Connection.query(add_query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });

}

// export default {
//     all
// }

module.exports = all;