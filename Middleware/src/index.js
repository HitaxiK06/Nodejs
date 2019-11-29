const express = require('express')
require('./db/connection_mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/tasks')
const bcrypt = require('bcryptjs')  //for incription

const app = express()
const port = process.env.port || 3000

app.use(express.json())
//------Users------
app.use(userRouter)
//------ End Users------

//------Task------
app.use(taskRouter)
//------ End Task------


app.listen(port, () => {
    console.log('Serve is up..!')
})

const MyFunction = async() => {
    const password = 'Hitaxi'
    const hashpass = await bcrypt.hash(password,2)      //Hash function not reversable

    console.log(hashpass)
}
MyFunction()