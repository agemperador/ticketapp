const MongoClient = require('mongodb').MongoClient;

const dbName = 'Ticketapp'

const dbPath = 'mongodb+srv://stormit:LMwQxtYUpv7cvD3w@cluster0-n6xvx.mongodb.net/test'


const findDocuments = function(db, collectionName, condition, callback) {
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Find some documents
    collection.find(condition).toArray(function(err, docs) {
        console.log("Found the following records");
        callback(docs);
    });
}
const insertDocuments = function(db, collectionName, data, callback) {
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Insert some documents
    collection.insert(data, function(err, result) {
        console.log("Inserted", data);
        callback(result);
    });
}

const getDB = (collection, condition, callback) => {

    MongoClient.connect(dbPath, (err, client) => {
        const db = client.db(dbName)
        findDocuments(db, collection, condition, res => {
            console.log('Datos encontrado');
            client.close()
            callback(res)
        })
        if (err) throw err;
        console.log('Acceso ok');
    })
}

const saveDB = (data, collection, callback) => {
    MongoClient.connect(dbPath, (err, client) => {

        const db = client.db(dbName)

        insertDocuments(db, collection, data, res => {
            console.log('Datos guardados');
            client.close()
            callback()
        })

        if (err) throw err;
        console.log('Acceso ok');
    })
}

module.exports = {
    getDB,
    saveDB
}