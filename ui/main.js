console.log('loaded login.js');
var submit= document.getElementById("submit");
submit.onclick = function()
  {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log('button clicked'+username+password);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
            {
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
