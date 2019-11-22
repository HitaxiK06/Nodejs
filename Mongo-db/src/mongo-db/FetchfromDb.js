const { MongoClient, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect Database')
    }
    const db = client.db(databaseName)
    //1
    db.collection('users').findOne({ name: 'Hirvita Rajyaguru' }, (error, result) => {
        if (error) {
            return console.log('unable to Fetch User')
        }
        console.log(result)
    })
    db.collection('Task').findOne({ _id: new ObjectId('5dd3ee4d13926ecafc38f176') }, (error, result) => {
        if (error) {
            return console.log('unable to Fetch User')
        }
        console.log(result)
    })
    //2. 5dd531959ee1d48520a4805e 5dd3efc2bd8052d6d80f49dc
    db.collection('users').find({ name: 'Hitaxi Kachhadiya' }).toArray( (error, result) => {
        if (error) {
            return console.log('unable to Fetch User')
        }
        console.log(result)
    })
})