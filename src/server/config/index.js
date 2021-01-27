/* index.js
*
    Provides a separate module to define connection parameters.  Be careful
    committing this to source control if sensistive.
*
*/

export default {

    mongodb: {
        host: 'myhost.com',
        port: 3306,
        user: '<user>',
        password: '<password>',
        database: 'notes_db'
    }

}