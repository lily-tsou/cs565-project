/* index.js
*
    Creates a connection object to MongoDB.
*
*/

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'notequest';

// Test for MongoDB server connection
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    if(err) {
        console.log("MongoDB not responding");
    } else {
        console.log("Connected successfully to server");
        // db = client.db(dbName);
        client.close();
    }
});

let dbAdd = (note) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if(err) { throw err; }
        db = client.db(dbName);
        let newRec = { data: note };
        db.collection('notes').insertOne(newRec, (err, res) => {
            if(err) { throw err; }
            console.log("Inserted document: " + newRec.data + " Inserted Count: " + res.insertedCount);
            client.close();
        });
    });
    return "Added: " + note;
}

let dbList = async (callback) => {
    await MongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
        if(err) { throw err; }
        let db = client.db(dbName);
        await db.collection('notes').find({}).toArray((err, result) => {
            if (err) { throw err; }
            callback(result);
            client.close();
        });
    });
}

module.exports = { dbAdd, dbList };