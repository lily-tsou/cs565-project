/* index.js
*
    Creates a connection object to MongoDB.
    Connection parameters are imported from an external config module.
*
*/

// Switched from ES modules to CommonJS
// import * as mongodb from 'mongodb';
// import config from '../config';
// import addNote from './addnote';

const mongoClient = require('mongodb').MongoClient;
const config = require('../config');
const addNote = require('./addnote');

// Switched from ES modules to CommonJS
// export const Connection = mongodb.createConnection(config.mongodb);
// const Connection = mongodb.createConnection(config.mongodb);

const url = 'mongodb://localhost:27017';
const dbName = 'notequest';

// mongoClient.connect(url, function(err, client) {
//     if(err) console.log(err);
//     console.log("Connected successfully to server");
//     const db = client.db(dbName);
//     client.close();
// });

// Connection.connect(err => {
//     if(err) console.log(err);
// });

// Switched from ES modules to CommonJS
// export default {
//     Add_note
// }

module.export = mongoClient;