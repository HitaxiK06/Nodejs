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
        unique:true,
        required:true,
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

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to Login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Unable to Login')
    }
    return user
}

//Arrow function not bind raw this
//run before save and hash the password
userSchema.pre('save', async function (next) {
    const user = this
    console.log("Before Query Fire")
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 2)
    }

    next()
})



const User = mongoose.model('users', userSchema)

module.exports = User

