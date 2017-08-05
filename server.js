var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/sruthi', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sruthi.html'));
});

app.get('/sandy', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sandy.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//aDDED BY SRU
app.get('/ui/depositphotos_127845906-stock-illustration-black-headphones-with-red-cord.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'depositphotos_127845906-stock-illustration-black-headphones-with-red-cord.jpg'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
