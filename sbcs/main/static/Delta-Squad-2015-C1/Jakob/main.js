(function(){

$(document).ready(initialize);

  function initialize(){

    $('#red').click(colorred);
    $('#blue').click(colorblue);
    $('#orange').click(colororange);
    $('#green').click(colorgreen);

var myvariable = "hello";

    console.log(myvariable);
}

function colorred(){
    $('h1').css('color','lightgrey');
  $('.reddiv').css('background-color','red');
}
  function colorblue(){
    $('h1').css('color','lightgrey');
    $('.reddiv').css('background-color','blue');
}
function colororange(){
$('h1').css('color','lightgrey');
$('.reddiv').css('background-color','#FA6900');
}
  function colorgreen(){
  $('h1').css('color','lightgrey');
  $('.reddiv').css('background-color','green');
}



})();
