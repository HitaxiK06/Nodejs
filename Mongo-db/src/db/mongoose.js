const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('users', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const user = new User({
    name: 'Hitaxi',
    age: ''
})

user.save().then(() => {
    console.log(user)
}).catch(() => {
    console.log('Error!', error)
})