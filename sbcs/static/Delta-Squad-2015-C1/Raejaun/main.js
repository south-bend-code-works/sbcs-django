(function(){

  $(document).ready(initialize);

   function initialize(){


   $('#redBtn').click(donttouch);
    $('#yellowBtn').click(touch);
    $('#greenBtn').click(green);

   var myVariable = "pernicious";

  //  multiply(6,8);
  //  add(15,15);

    console.log(myVariable);
   }
   function add(x,y){
     var z = x+y;
     alert("add:"+z)


   }
   function multiply(a,b)
   {
     var answer =a*b;
     equation = a + "*"+ b + "=" +answer;
     console.log(equation);
     alert(equation);
   }
   function donttouch(){
     alert('ow')
     $('body').css('background-color', 'black');
    $('h1').css('color', 'red');
  }
    function touch(){
      alert('be prepared')
    $('body').css('background-color', 'yellow');
    $('h1').css('color', 'orange');
   }
   function green() {
    var newColor = $(this).text();
    $('h1').css('color', newColor)
   }


})();
