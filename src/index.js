// const express = require("express")
// const simulationRouter = require("./routes/simulation")

// const app = express()


// app.use("/simulation", simulationRouter)

// app.listen(4000, () => {
//     console.log("Server on port 4000")
// })

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'admCastingCalc',
        password: 'akg234FMQV',
        server: 'castingcalc.database.windows.net', 
        database: 'optimacasting' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from formulas_simulacion', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});