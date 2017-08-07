console.log('Loaded!');
var ele= document.getElementById('text');
ele.innerHTML = "its  new value !!!";
//move img
var img= document.getElementById('img');
img.onclick = function()
{
    img.style.marginTop='200px';
    setInterval(move,500);
};

var margin=0;
function move()
{
    margin=margin+2;
    img.style.marginTop=margin + 'px';
}