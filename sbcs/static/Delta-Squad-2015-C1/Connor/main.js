(function(){

$(document).ready(initialize);

function initialize(){
  $('#Text').click(clickbutton);
  $('#Background').click(BackgroundColor);
  $('#Erase').click(EraseButton);
  $('.colorchange').click(changeColor);

  var varVariable = "Hello World"

  console.log(varVariable);
  }
      function clickbutton(){
      $('H1').css('color', 'purple');
      $('H2').css('color', 'blue');
      $('p').css('color', 'blue');
      $('ul').css('color', 'blue');
      $('button').css('color', 'black');
  }
      function BackgroundColor(){
      $('body').css('background-color', 'black');
      $('.greydiv').css('background-color', 'grey');
      $('.greydiv').css('color', 'purple');
      $('button').css('background-color', 'grey');
      addition(17, 2)
  }
      function EraseButton(){
      $('H1').css('color', 'White');
      $('H2').css('color', 'White');
      $('body').css('background-color', 'White');
      $('p').css('color', 'White');
      $('li').css('color', 'white');
      $('a').css('color', 'white');
      $('.greydiv').css('background-color', 'white');
      $('button').css('background-color', 'white');
      $('button').css('color', 'white');
      $('button').css('border', 'none');
      alert('Successfully Deleted')
      }

      function addition(x,y){
        var answer = x + y
        console.log(answer)
      }
      function changeColor() {
        var newColor = $(this).text();
        $('p').css('color', newColor)
      }
}
)();
