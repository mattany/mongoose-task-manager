// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectId} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
    db.collection('tasks').deleteOne({
        _id: new ObjectId("610148768c0d3b7d2dcd3bd2")
    }).then((result) => {
        console.log("deleted!")
        console.log(result)
    }).catch((error) => {
        console.log("Error!")
        console.log(error)
    })
















})