const { MongoClient, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect Database')
    }
    const db = client.db(databaseName)
 const updatepromise =  db.collection('users').updateOne({
        _id: new ObjectId('5dd3df51336e103fdd801832')
    },
        {
            $set: {
                name: 'Hitaxi'
            }
        })
    updatepromise.then((result) => {
        console.log(result)
    }).catch((e) => {
        console.log(e)
    })
})