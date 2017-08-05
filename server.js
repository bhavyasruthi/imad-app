var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var content = {
    "title" : "sruthi",
    "role"  : "Bride",
    "matter" : `<h4>From the words of the Sandeep!! (If only you have the patience and time to read it :P )</h4>
    <p>
               Sruthi!! - Whataaa Girl she is!!! This is the first feeling that would strike the mind in the initial few minutes of conversation..
        She has the energy of a star/comet..wonder where she has so much energy stored in her small little thin feeble looking personality.
        Her words are endless!! she can just keep talking and one just can't avoid listening :)
        Her smile is effervescent!! it just induces life in you!!
        Hailing from the beautiful town of Tirupathi, she is the eldest daughter of the proud parents and a beautiful sister to a lucky girl!! She grew through her childhood studying hard only to beat the rank 1 each other time in a different streak!!
        It just didn't stop with studies..she just did everything possible or one can ever imagine doing in the childhood - Singing, Dancing, Art, hand crafting, cartooning.
        However, just these wouldn't make her any special and without the mention of the few of the many bravest/greatest/boldest acts of this innocent looking yet the most naughtiest girl - pranking her beloved friends, bunking her lethargic btech classes, shouting inside the dark theatres, breaking the couples privacy, screaming out in open air, tiptoeing the silliest mistakes, striking with her wittiest punches, ragging her seniors, framing her friend's silliest acts, and this list just can't end..
        She stands illustrious to the meaning of a 'Beautiful Person' with the most kindest personality, ever convincing rigidness, mind wincing naughtiness, calmest ordinance, tactful craziness, disciplinedly maturedness and emotionally coolness.
        She has a magic that makes her the 'most favourite' of everyone around her and she sets into waves the positive charm that spreads out only when you have the most happiest sould on the earth inside you.
        Her world has always been beautiful just because everything around you reflects your inner self.
        She has the looks of the 'Girl next door' but immediately the thought would transform to 'I wish i really had someone like her by the next door'
        'Intamandi undaga Sruthi nake enduku friend ayindi' is the most common adage that follows her!!
    </p>`
};

function createTemplate(data)
{
    var role=data.role;
    var matter= data.matter;
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/sruthi', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'sruthi.html'));
  res.send(createTemplate(content));
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
