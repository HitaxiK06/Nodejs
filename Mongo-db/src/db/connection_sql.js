const mssql = require('mssql')
//const express = require('express');

//const app = express();

const config = {
    host:'localhost',
    user: 'SYNOVERGETECH\kachhahi',
    server: 'SVT-PC-193',
    database: 'Hitaxi',
    
};

mssql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    request.query('select TOP(10) [Employee] from [Hitaxi].[dbo].[abc]', function (err, recordset) {

        if (err) console.log(err)

        // send records as a response
        console.log(recordset);

    });
});

// var server = app.listen(3000, function () {
//     console.log('Server is running..');
// });