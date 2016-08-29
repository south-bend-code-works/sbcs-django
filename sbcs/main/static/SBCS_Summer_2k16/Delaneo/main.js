(function(){
$(document).ready(initialize);

function initialize(){
  $("button").click(changeColor);
}



function changeColor(){
  var hiscolor = $(this).text();
  $("h1").css("color", hiscolor);
}



})();
