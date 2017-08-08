console.log('Loaded!');
var comment = document.getElementById("name").value;
var submit= document.getElementById("submit");
submit.onclick = function(){
    console.log('in f!');
    var names=["1","2"];
    var list="";
    for(var i=0;i<names.length;i++)
    {
   list += names[i];
    }
   var namesList= document.getElementById("list"); 
   nameList.innerHTML=list;
};