var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(8001, function(){
    console.log('app is listening on port 8001 vnimatelno');
});