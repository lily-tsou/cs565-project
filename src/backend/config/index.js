/* index.js
*
    Provides a separate module to define connection parameters.  Be careful
    committing this to source control if sensistive.
*
*/

const url = 'mongodb://localhost:27017';
const dbName = 'notequest';

module.exports = { url, dbName };