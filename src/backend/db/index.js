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

let dbList = async () => {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true })
        .then((res) => { return res; })
        .catch((err) => { console.log('DB connection failed', err) });

    const db = await client.db(dbName);
    const col = await db.collection('notes');
    let results = await col.find({}).toArray()
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find all failed', err); });
    client.close();

    return results;
};

module.exports = { dbAdd, dbList };