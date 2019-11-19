const { MongoClient, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

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
})