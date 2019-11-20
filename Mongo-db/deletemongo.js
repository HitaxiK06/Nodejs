const { MongoClient, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect Database')
    }
    const db = client.db(databaseName)
    //1st method
    db.collection('users').deleteOne({
        name: 'Hitaxi'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    //2nd method
    db.collection('users').deleteMany({
        age: 23
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})