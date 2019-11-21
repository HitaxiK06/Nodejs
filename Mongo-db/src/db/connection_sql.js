const mssql = require('mssql')
const express = require('express');

const app = express();

const config = {
    host: 'localhost',
    user: 'SYNOVERGETECH\kachhahi',
    password: '',
    server: 'SVT-PC-193',
    database: 'Hitaxi',
    port: 8080
};
app.get('/', function (req, res) {
    mssql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        const request = new mssql.Request();

        // query to the database and get the records
        request.query('select TOP(10) [Employee] from [Hitaxi].[dbo].[abc]', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});
var server = app.listen(3000, function () {
    console.log('Server is running..');
});