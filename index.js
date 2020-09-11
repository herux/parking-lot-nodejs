const express= require('express');        
const app    = express(); 
const Result = require('./app/models/Result'); 
const plRoute= require('./app/routes/ParkingLot.route');

app.use(express.json());
app.use('/apis', plRoute);
// catch 404 and forward to error handler
app.use(function(req, res, next) { 
    let result = new Result(false, 'endpoint not found');
    result.statusCode = 404;
    res.status(result.statusCode).json(
        result.response()
    );
  });

var port = process.env.PORT || 3030; 
app.listen(port);
console.log('Go to http://localhost:' + port);