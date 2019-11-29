const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema(User, {
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
    password: {
        type: String,
        required: true,
        minlength: 7
    }
})

userSchema.pre('save',function(){
    const user = this
    next()
})
const User = mongoose.model('users', userSchema)

module.exports = User

