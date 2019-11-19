// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const Id = new ObjectId()
console.log(Id)
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect Database')
    }
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        _id: Id,
        name: 'Hirvita Rajyaguru',
        age: 23
    }, (error, result) => {
        if (error) {
            return console.log('unable to insert User')
        }
        console.log(result.ops)
    })
    // db.collection('users').insertMany([{
    //     name: 'Adit Pandey',
    //     age: 20
    // },
    // {
    //     name: 'Basni Hadvani',
    //     age: 23
    // }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert User')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('Task').insertMany([{
    //     Description: 'Insert Data',
    //     Update: 'Completed'
    // },
    // {
    //     name: 'Update Data',
    // },
    // {
    //     name: 'Deleted Data',
    //     Update: 'Incomplete'
    // }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert User')
    //     }
    //     console.log(result.ops)
    // })

})