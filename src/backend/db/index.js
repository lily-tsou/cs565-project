/* index.js
*
    Creates a connection object to MongoDB.
*
*/

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'notequest';
const dbColName = 'notes';

let dbClient = async () => {
    return await MongoClient.connect(url, { useUnifiedTopology: true })
        .then((res) => { return res; })
        .catch((err) => { console.log('DB connection failed', err) });
}; 

let dbCol = async (client) => {
    const db = await client.db(dbName);
    const col = await db.collection(dbColName);
    return col;
};

dbClient()
    .then((res) => { 
        console.log("Connected successfully to server");
        res.close();
     })
    .catch((err) => { console.log("MongoDB not responding"); });

let dbAdd = async (note) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let newRec = { data: note };
    let results = await col.insertOne(newRec)
        .then((res) => {return res; })
        .catch((err) => { console.log('DB insertOne failed', err); });
    client.close();

    return results;
}

let dbList = async () => {
    const client = await dbClient();
    const col = await dbCol(client);
    let results = await col.find({}).toArray()
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find all failed', err); });
    client.close();

    return results;
};

module.exports = { dbAdd, dbList };