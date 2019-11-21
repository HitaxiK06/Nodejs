const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('users', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a Positive')
            }
        }
    },
    email: {
        type: String,
        lowecase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email Invalid')
            }
        }
    },
    password : {
        type: String,
        required: true,
        minlength:7,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error('Email Invalid')
        //     }
        // }
    }
})

const user = new User({
    name: 'Hitaxi Kachhadiya',
    age: 22,
    email:'hitaxi@synoverge.com',
    password: 'Hitaxi12'
})

user.save().then(() => {
    console.log(user)
}).catch((error) => {
    console.log('Error!', error)
})




// const Task = mongoose.model('Task-Manager', {
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
//     Description: 'Trial11',
//     Update: 'In Progress', 
//     name: 'Hirvita'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })