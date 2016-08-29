(function(){
  $(document).ready(initialize);

  function initialize(){
    // alert("Yo Quiero Taco Bell!");
    $("button").click(changeColor);
  }

  function changeColor(){
    var myColor = $(this).text();
    $('h1').css('color', myColor);
  }










  //   $("#white").click(colorWhite);
  // }
  //
  // function colorPurp(){
  //   $("h1").css("color","#800080");
  //
  // }
  //
  // function colorWhite(){
  //   $("h1").css("color","#FFFFFF");
  //
  // }

})();
