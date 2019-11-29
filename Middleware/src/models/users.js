const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
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

userSchema.pre('save',async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
const User = mongoose.model('users', userSchema)

module.exports = User

