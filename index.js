const express= require('express');        
const app    = express(); 
const Result = require('./app/models/Result'); 

// catch 404 and forward to error handler
app.use(function(req, res, next) { 
    res.status(404).json(
        new Result(false, 'endpoint not found')
        .response()
    );
  });

var port = process.env.PORT || 3030; 
app.listen(port);
console.log('Go to http://localhost:' + port);