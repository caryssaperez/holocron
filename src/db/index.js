const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config();

let url = `mongodb://${process.env.username}:${process.env.password}@cluster0-shard-00-00-uugl3.mongodb.net:27017,cluster0-shard-00-01-uugl3.mongodb.net:27017,cluster0-shard-00-02-uugl3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
  
    db.close();
});