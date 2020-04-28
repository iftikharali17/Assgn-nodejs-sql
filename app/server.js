var express = require('express'); //load express library

var app = express(); //set app to express method

app.set('view engine','ejs'); // set ejs as our view engine
app.set('views',__dirname + '/../public/views'); //set default views directory so that express will look into it

app.use(express.static(__dirname + '/../public')); //use middleware express.static to tell express where to look for our static files

require('./routes.js')(app)

module.exports = app; // creating a server