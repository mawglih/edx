var express = require ('express');
var app = express();
app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));
app.listen(8001, function () {
        console.log('Our app is listening on port 8001!');
    });
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res) { res.setHeader('Content-Type', 'text/plain');
res.end(JSON.stringify(req.body, null, 2)); });

app.get('/welcome', function(req, res){
return res.send('Welcome to Module 2 Homework!');

});