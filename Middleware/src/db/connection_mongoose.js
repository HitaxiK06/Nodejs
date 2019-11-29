const mongoose = require('mongoose')

//connection with database
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
