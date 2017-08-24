//main.js
/*console.log('Loaded!');

var submit= document.getElementById("submit");
submit.onclick = function()
  {
      console.log('in function lin1!');
    var comment = document.getElementById("name");
    var ncomment = comment.value;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
        {
            console.log('in function readystatechnge!');
        if(request.readyState === XMLHttpRequest.DONE)
            {
                console.log('in function liif readystten1!');
            if(request.status === 200)
                {
                    
                console.log('in f!');
                var names=request.responseText;
                console.log('in f!'+names);
                names= JSON.parse(names);
                var list="";
                for(var i=0;i<names.length;i++)
                    {
                         list += '<li>' +"Comment" +names[i] + '</li>';
                     }
                var namesList= document.getElementById("list"); 
                namesList.innerHTML=list;
                }
            }
         };
   console.log(ncomment);
   request.open('GET','http://sbhavyasruthi36.imad.hasura-app.io/submitComment/:'+ncomment,true);
   //request.open('GET','http://sbhavyasruthi36.imad.hasura-app.io/submitComment/sru',true);
    request.send(null);
};*/
/*submit.onclick = function(){
    console.log('in f!'+ncomment+"Szvsf");
    alert(ncomment);
     var namesList= document.getElementById("list");
   namesList.innerHTML= '<li>' + ncomment + '</li>';
};*/
//login.js
console.log('loaded login.js');
var submit= document.getElementById("submit");
submit.onclick = function()
  {
      console.log('button clicked');
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log('button clicked'+username+password);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
        {
            console.log('in function readystatechnge!');
        if(request.readyState === XMLHttpRequest.DONE)
            {
                console.log('in function liif readystten1!');
            if(request.status === 200)
                {
                   alert("logged in") ;
                }
                else if(request.status === 403)
                alert("Incorrect username & password");
                 else if(request.status === 500)
                alert("Something went wrong");
            }
         };
   request.open('POST','http://sbhavyasruthi36.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username ,password : password}));
};
