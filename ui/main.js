console.log('Loaded!');

var submit= document.getElementById("submit");
submit.onclick = function(){
    var comment = document.getElementById("name");
var ncomment = comment.value;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.ReadyState === XMLHttpRequest.DOM){
            if(request.status === 200){
                console.log('in f!');
                
    var names=request.responseText;
    window.setTimeout(function () { names= JSON.parse(names); }, 1000);
    
    var list="";
    for(var i=0;i<names.length;i++)
    {
   list += '<li>' +names[i] + '</li>';
    }
   var namesList= document.getElementById("list"); 
   namesList.innerHTML=list;
            }
        }
    };
    request.open('GET','http://sbhavyasruthi36.imad.hasura-app.io/submitComment/:'+name,true);
    request.send(null);
};
/*submit.onclick = function(){
    console.log('in f!'+ncomment+"Szvsf");
    alert(ncomment);
     var namesList= document.getElementById("list");
   namesList.innerHTML= '<li>' + ncomment + '</li>';
};*/