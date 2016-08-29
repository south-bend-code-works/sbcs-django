(function(){

  $(document).ready(initialize);

  function initialize(){
    $('#pink').click(colorpink);
    $('#blue').click(colorblue);
    $('button').click(changecolor);

var myVariable="Stack your cash!"

    console.log(myVariable);

  }
  function changecolor(){
    var newcolor =$(this).text();
    $('h1').css('color', newcolor);
  }
  function addition(x,y)
{
  var z= x + y;
  alert("addition:"+z);
}
function multilpy(a,b)
{
  var Theplugs = a * b;
  alert("multilpy:"+Theplugs);
}

function colorpink(){
$('h1').css('color', 'pink');
$('div').css('background-color', '#66ff33');
$('div').css('color', '#ff0066');
$('body').css('backgrund-color', '#ff0066');
// multilpy(5,5);
}
function colorblue(){
$('h1').css('color', 'blue');
$('div').css('background-color', '#ff0066');
$('div').css('color', '#66ff33');
$('body').css('backgrund-color', '#66ff33');
// addition(20,5);
}


})();
