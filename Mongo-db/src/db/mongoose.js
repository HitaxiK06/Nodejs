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
    age: 22
})

user.save().then(() => {
    console.log(user)
}).catch((error) => {
    console.log('Error!', error)
})




// const Task = mongoose.model('Task', {
//     Description: {
//         type: String
//     },
//     Update: {
//         type: String
//     },
//     name: {
//         type: String
//     }
// })
// const task = new Task({
//     Description: 'Trial',
//     Update: 'In Progress',
//     name: 'Hirvita'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })