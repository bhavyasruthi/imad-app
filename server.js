var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;
var app = express();
var crypto = require('crypto');
var session = require('express-session');
var bodyParser = require('body-parser');
var counter=0;
var config={
   user : 'sbhavyasruthi36',
   database : 'sbhavyasruthi36',
   host : 'db.imad.hasura-app.io',
   port: '5432',
   password : process.env.DB_PASSWORD
};

function createTemplate(data)
{
    var role=data.title;
    var matter= data.content;
var htmlTemplate = `<html>
 <head>
    <meta charset="UTF-8">
    <meta name="description" content="Wedding Website for Sruthi & Sandeep">
    <meta name="keywords" content="wedding, wedsite">
    <meta name="robots" content="index, follow">
    <title>Sruthi & Sandeep</title>
    <link href="/ui/style.css" rel="stylesheet"/>
 </head>
 <body>
    <div>
        <a href='\'>Home</a>
    </div>
    <hr/>
    <h3>${role}</h3> 
    ${matter}
 </body>
</html>
`;
return htmlTemplate;
}


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret : 'dfbes',
    cookie : {maxAge :100000000}
}));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/counter', function (req, res) {
    
///imdb.get('Titanic', {apiKey: '7e44a7ae', timeout: 1800}).then((function(data) { console.log(data); }));
    counter++;
  res.send(""+counter);
});

var pool = new Pool(config);
app.get('/dbconn', function (req, res) {
    pool.query('SELECT * FROM ARTICLE',function(err,result){
    if(err){
        res.status(500).send(err.toString());
    }
    else{
        res.send(JSON.stringify(result));
    }
});
});

function hash(input,salt){
    var hashed = crypto.pbkdf2Sync(input, salt, 100000, 512, 'sha512').toString('hex');
    return ["pbkdf2","10000",salt,hashed].join('$');
    
}
app.get('/hash/:input',function(req,res){
   var hashedValue = hash(req.params.input ,"random");
   res.send(hashedValue);
});

app.post('/createUser',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var salt= crypto.randomBytes(128).toString('hex');
   var dbString = hash(password,salt); 
   pool.query('INSERT INTO "user" (password,username,email) VALUES($1,$2,$3)',[dbString,username,email],function(err,result){
       if(err){
        res.status(500).send(err.toString());
    }
    else{
        res.send("user created successully "+username);
    }
   });
});

app.post('/login',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
   pool.query('SELECT * FROM "user" WHERE username = $1',[username],function(err,result){
       if(err){
        res.status(500).send(err.toString());
    }
    else{
        if(result.rows.length === 0){
            res.send(403).send("user not exist"+username);
        }
        else{
            var dbString = result.rows[0].password;
            var salt = dbString.split('$')[2];
            var hashedPwd =hash(password,salt);
            if(hashedPwd === dbString){
                req.session.auth = {userId : result.rows[0].id};
        res.send("user logged successully "+username);
            }
            else{
                res.send(500).send("wrong password");
            }
        }
    }
   });
});

app.get('/checkLogin', function (req, res) {
    if(req.session && req.session.auth&& req.session.auth.userId)
    res.send("user logged in "+req.session.auth.userId.toString());
    else
    res.send("not logged");
});

app.get('/logout', function (req, res) {
   delete req.session.auth;
   res.send("logged out");
});

app.get('/loginMe', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

var comments=[];
app.get('/submitComment/:comment', function (req, res) {
   var comment = req.params.comment;
   comments.push(comment);
  res.send(JSON.stringify(comments));
});

app.get('/articles/:articalName', function (req, res) {
    pool.query("SELECT * FROM ARTICLE where title='"+req.params.articalName+"'",function(err,result){
     if(err){
        res.status(500).send(err.toString());
    }
    else{
        if(result.rows.length===0){
           res.ststus(500).send("Not Found"); 
        }
        else{
           var articleData =  result.rows[0];
           res.send(createTemplate(articleData));
        }
    }   
    });
 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
