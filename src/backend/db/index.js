/* index.js
*
    Creates a connection object to MongoDB.
    Connection parameters are imported from an external config module.
*
*/

const mongoClient = require('mongodb').MongoClient;
const config = require('../config');

mongoClient.connect(config.url, function(err, client) {
    if(err) {
        console.log("MongoDB not responding");
        // console.log(err);
    } else {
        console.log("Connected successfully to server");
        const db = client.db(config.dbName);
        client.close();
    }
});

module.exports = mongoClient;