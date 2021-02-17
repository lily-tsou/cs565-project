/* index.js
*
    Creates a connection object to MongoDB.
*
*/

const mongodb = require('mongodb');
const user = 'mongodb';
const passwd = 'mongodb';
const dbName = 'notequest';
const url = "mongodb+srv://" + user + ":" + passwd + "@cluster0.cn7yg.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
const dbColName = 'notes';

// Private helper functions
let dbClient = async () => {
    return await mongodb.MongoClient.connect(url, { useUnifiedTopology: true })
        .then((res) => { return res; })
        .catch((err) => { console.log('DB connection failed', err) });
}; 

let dbCol = async (client) => {
    const db = await client.db(dbName);
    const col = await db.collection(dbColName);
    return col;
};

// Test db server connect when module initializes
dbClient()
    .then((res) => { 
        console.log("Connected successfully to server");
        res.close();
     })
    .catch((err) => { console.log("MongoDB not responding"); });

// API implementations
let dbAdd = async (note) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let newRec = { data: note };
    let results = await col.insertOne(newRec)
        .then((res) => {return res; })
        .catch((err) => { console.log('DB insertOne failed', err); });
    client.close();

    return results;
};

let dbList = async () => {
    const client = await dbClient();
    const col = await dbCol(client);
    let results = await col.find({}).toArray()
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find all failed', err); });
    client.close();

    return results;
};

let dbRetrieve = async (id) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let oid = new mongodb.ObjectID(id);
    let results = await col.find({ '_id': oid}).toArray()
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find from id failed', err); });
    client.close();

    return results;
};

let dbEdit = async (id, note) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let oid = new mongodb.ObjectID(id);
    let results = await col.updateOne({ '_id' : oid}, { $set: {'data': note}})
        .then((res) => {return res; })
        .catch((err) => { console.log('DB updateOne failed', err); });
    client.close();

    return results;
};

let dbFind = async (key) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let results = await col.find({'data': new RegExp(key)}).toArray()
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find from query filter failed', err); });
    client.close();

    return results;
};

let dbDelete = async (id) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let oid = new mongodb.ObjectID(id);
    let results = await col.deleteOne({'_id' : oid})
        .then((res) => {return res; })
        .catch((err) => { console.log('DB deleteOne failed', err); });
    client.close();

    return results;
};

let dbDeleteAll = async () => {
    const client = await dbClient();
    const col = await dbCol(client);
    let results = await col.deleteMany({})
        .then((res) => {return res; })
        .catch((err) => { console.log('DB deleteMany failed', err); });
    client.close();

    return results;
};

module.exports = { dbAdd, dbList, dbRetrieve, dbEdit, dbFind, dbDelete, dbDeleteAll };