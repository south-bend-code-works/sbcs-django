
(function(){
  $(document).ready(intialize);

  function intialize (){

    $('button').click(changecolor);
    var myVariable = "Goodbye";

    // console.log(myVariable);
    // addition(8,4);
    // divide(30,5);
  }
  function changecolor(){
    var newcolor = $(this).text();
    $('h1').css('color', newcolor);
  }

//   function addition(x,y){
//     var z = x + y;
//     alert(z);
//   }
//
// function divide(c,d){
//   var e = c/d
//   alert(c/d);
// }

  function colorBrown(){
    $('h1').css('color', 'Brown');
  }

  function colorBlack(){
      $('h1').css('color', 'Black');
  }
})();
