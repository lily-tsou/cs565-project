const mongoClient = require('mongodb').MongoClient;

test('db/index  test', () => {
    let rc = true;
    
    // this gives open handle error in jest due to Connection.connect()
    try {
        mongoClient.connect(config.url, function(err, client) {
            if(err) {
                console.log("MongoDB not responding");
                // console.log(err);
                rc = false;
            } else {
                console.log("Connected successfully to server");
                const db = client.db(config.dbName);
                client.close();
                rc = true;
            }
        });
    } catch (err) {
        rc = false;
    }
    
    expect( rc ).toBe(true);
});

