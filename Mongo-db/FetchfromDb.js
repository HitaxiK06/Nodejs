const { MongoClient, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect Database')
    }
    const db = client.db(databaseName)
    db.collection('users').findOne({ name: 'Hirvita Rajyaguru' }, (error, result) => {
        if (error) {
            return console.log('unable to Fetch User')
        }
        console.log(result)
    })
    db.collection('users').findOne({ _id: new ObjectId('5dd3efc2bd8052d6d80f49dc') }, (error, result) => {
        if (error) {
            return console.log('unable to Fetch User')
        }
        console.log(result)
    })
    db.collection('users').find({ name: 'Hitaxi Kachhadiya' }).toArray( (error, result) => {
        if (error) {
            return console.log('unable to Fetch User')
        }
        console.log(result)
    })
})