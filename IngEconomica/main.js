var express = require('express');  
var app = express();  
var server = require('http').Server(app); 

app.use(express.static('public'));

fs = require('fs');
app.get('/', function(req, res) {
res.sendFile( __dirname + "/public/" + "login.html" );
});


app.get('/linea1', function(req, res) {
res.sendFile( __dirname + "/public/" + "linea1.html" );
});

app.get('/linea2', function(req, res) {
res.sendFile( __dirname + "/public/" + "linea2.html" );
});

app.get('/linea3', function(req, res) {
res.sendFile( __dirname + "/public/" + "linea3.html" );
});


server.listen(8080, function() {  
  console.log("Servidor corriendo en http://localhost:8080");
});


