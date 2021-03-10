/* index.js
*
    Creates a connection object to MongoDB.  The db used is hosted in MongoDB Atlas and the url needs to
    be specified in the global const.

    There is a sequence to each transaction.  Here is a rough outline:
    1. connect() method returns a client object
    2. client is queried for a db with db()
    3. db is queried for a collection with collection()
    4. collection object may now be used to insertOne(), find(), updateOne(), deleteOne() or deleteMany() on collection
    5. client connection is closed with close()

    mongodb is the 3rd party module used.  "mongoose" is another popular alternative.

    When searching for a specific record such as with dbEdit() or dbDel(), the "_id" field is used.
    This is generated by the MongoDb during insertOne() and automatically inserted as a field in the record.

    The dbFind() takes a key value and searches both 'title' and 'note' fields.  There is an OR specifier placed
    in the query to make this happen.
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
let dbAdd = async (user, title, note) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let newRec = { 'user': user, 'title': title, 'note': note };
    let results = await col.insertOne(newRec)
        .then((res) => {return res; })
        .catch((err) => { console.log('DB insertOne failed', err); });
    client.close();

    return results;
};

let dbList = async (user) => {
    const client = await dbClient();
    const col = await dbCol(client);
    // TBD: find for user: user only
    let results = await col.find({}).toArray()
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find all failed', err); });
    client.close();

    return results;
};

let dbRetrieve = async (user, id) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let oid = new mongodb.ObjectID(id);
    // TBD: find for user: user only
    let results = await col.find({ '_id': oid}).toArray()
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find from id failed', err); });
    client.close();

    return results;
};

let dbEdit = async (user, id, title, note) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let oid = new mongodb.ObjectID(id);
    // TBD: find for user: user only
    let results = await col.updateOne({ '_id' : oid}, { $set: {'title': title, 'note': note}})
        .then((res) => {return res; })
        .catch((err) => { console.log('DB updateOne failed', err); });
    client.close();

    return results;
};

let dbFind = async (user, key) => {
    const client = await dbClient();
    const col = await dbCol(client);
    // TBD: find for user: user only
    let results = await col.find({$or:[{"title": new RegExp(key)}, {"note": new RegExp(key)}]}).toArray()
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find from query filter failed', err); });
    client.close();

    return results;
};

let dbDelete = async (user, id) => {
    const client = await dbClient();
    const col = await dbCol(client);
    let oid = new mongodb.ObjectID(id);
    // TBD: find for user: user only
    let results = await col.deleteOne({'_id' : oid})
        .then((res) => {return res; })
        .catch((err) => { console.log('DB deleteOne failed', err); });
    client.close();

    return results;
};

let dbDeleteAll = async (user) => {
    const client = await dbClient();
    const col = await dbCol(client);
    // TBD: find for user: user only
    let results = await col.deleteMany({})
        .then((res) => {return res; })
        .catch((err) => { console.log('DB deleteMany failed', err); });
    client.close();

    return results;
};

module.exports = { dbAdd, dbList, dbRetrieve, dbEdit, dbFind, dbDelete, dbDeleteAll };