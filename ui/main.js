console.log('Loaded!');
var comment = document.getElementById("name");
var ncomment = comment.value;
var submit= document.getElementById("submit");
/*submit.onclick = function(){
    console.log('in f!');
    var names=["1","2"];
    var list="";
    for(var i=0;i<names.length;i++)
    {
   list += '<li>' +names[i] + '</li>';
    }
   var namesList= document.getElementById("list"); 
   namesList.innerHTML=list;
};*/
submit.onclick = function(){
    console.log('in f!'+ncomment+"Szvsf");
    alert(ncomment);
     var namesList= document.getElementById("list");
   namesList.innerHTML= '<li>' + ncomment + '</li>';
};