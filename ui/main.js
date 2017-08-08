console.log('Loaded!');
var name = document.getElementById("name").value;
var submit= document.getElementById("submit");
submit.onClick = function(){
    var names=["1"];
    var list="";
    for(var i=0;i<names.length;i++)
    {
   list += names[i];
    }
   var namesList= document.getElementById("list"); 
   nameList.innerHTML=list;
};