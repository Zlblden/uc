var express = require('express')
    , app = express()
    , port = process.env.PORT || 8080;
var path = require('path');
var mongoose = require('mongoose');
var database = require('./config/database');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


mongoose.connect(database.url);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
require('./app/routes.js')(app);


app.listen(port, function () {
    console.log('Listening on port ', port)
});