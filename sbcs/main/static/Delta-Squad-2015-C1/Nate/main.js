(function(){

  $(document).ready(initialize);

  function initialize(){
    $('#Open').click(clickRed);
    $('#Close').click(clickBlue);
    $('#startButton').click(startButton);
    $('#Goodbye').click(clickBlack);
    $('button').click(changeColor);

    // var myVariable = "Baked Potato";
    // multiply(5,5);
    // alert(myVariable);
  }

  function addition(x, y)
 {
    var z = x + y;
    alert("addition;"+z);
  }

  function changeColor(){
    var newColor = $(this).text();
    $('h1').css('color', newColor);
  }
  function multiply(a, b)
  {
  var answer = a * b;
  alert("multiply;"+answer+" cool" + " beans")
  }

  function clickButton(){
    alert('I Told You Not To Click This Button');

  }

  function clickRed(){
    $('Body').jGravity({
               target: 'everything',
               ignoreClass: 'ignoreMe',
               weight: 25,
               depth: 5,
               drag: true
          });
}

  function startButton(){
    $('.hidden').css('display', 'block');
    $('#startButton').css('display', 'none');
  }
function clickBlue(){
$('h1').css('color', 'blue');

}

function clickBlack() {
  $('h1').css('color', 'black')
}
})();
