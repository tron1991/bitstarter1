var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response){
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});
