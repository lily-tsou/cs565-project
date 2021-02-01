/* index.js
*
    Provides a separate module to define connection parameters.  Be careful
    committing this to source control if sensistive.
*
*/

// Switched from ES modules to CommonJS
// export default {
// const all = {

//     mongodb: {
//         host: 'myhost.com',
//         port: 3306,
//         user: '<user>',
//         password: '<password>',
//         database: 'notes_db'
//     }

// }

const url = 'mongodb://localhost:27017';
const dbName = 'notequest';

// Switched from ES modules to CommonJS
module.exports = url, dbName;