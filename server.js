var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var contents = {
     "sruthi" : {
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
    },
    "sandy" : {
        "title" : "sandy",
        "role"  : "Groom",
        "matter" : `<h4>From the words of the Sruthi!! (If only you have the patience and time to read it :P )</h4>
        <p>
        Sandeep : Mr.Handsome - As each letter in his name says he is Sweet - Amazing- Noble- Delightful- Everlasting- Extraordinary- Perfect
        His presence is a magic around you that makes you forget everything. Really his parents deserve the appreciation for inducing great values in him.
        As being only son he has been Prince from the childhood having all loved ones around him.
        We will feel like we can do anything to see his beautiful smile.
        He is most cutest, smart, descent, hyperactive, plays cricket, tennis, badminton a lot.
        Secrets about him are unlike he looks he is very naughty, talkative which attracts everyone :P. His love is like a
        Having all excellence in him he selected Sruthi as his life partner what we call lucky stroke for Sruthi.
        I can say no girl is as fortunate as me to get my boy ..i can just say there's no substitute for him in this world
        ..... I bless my lucky star that I met him
        He showed How love colors your world ...
        I felt very surprised when i came to know about him . All his qualities , his nature grabbed my heart.. for d 1st time i thought even boys are great.:p yes he changed my perception towards boys. Great hats off to his patience for answering all my crazy doubts. Then i came to know - He is wonderful. amazing , magical. ... perfect and didn't give me chance to say no ..
        Finally the day came , it’s a great surprise to c him ..my mind stopped working, i don’t know wt was going on ...he just throbbed my heart.
        Every time wen he makes sure if i have reached home safely - He is my dad
        Every time wen he makes me sleep - He is my mom
        Every time wen he make sure if i m eating well- He is my sister
        Every time wen he is d reason who makes me smile- He is my lover
        Every time wen he gives confidence during my tough time - He is my booster
        Every time wen he shows what i can do - He is my well-wisher
        Every time wen he fights for me - He is my friend
        Every time wen he says i m looking great no matter how i am - He is my craziest fan
        He is my life
        He is my world
        Yes, He is everything to me....
        </p>`
    }
}
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

app.get('/:role', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'sruthi.html'));
  var role=req.params.role;
  res.send(createTemplate(contents[role]));
});

/*app.get('/sandy', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'sandy.html'));
 res.send(createTemplate(contents[g]));
});*/

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
