console.log('Loaded!');
var counter=0;
document.getElementById('b').onclick = function()
{
    alert("dfg");
    counter++;
    document.getElementById('b').innerHTML = counter;
};