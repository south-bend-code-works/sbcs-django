(function() {
  $(document).ready(initialize);

  function initialize (){
    $('button').click(touch);

    setTimeout(changeBackground, 2000);
  }

})();

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackground() {
  $('body').css('background-color', getRandomColor())
  setTimeout(changeBackground, 2000);
}

function makeBlue(){
  alert ('About to make the background color blue')
  $('body').css('background-color','blue');
}

function touch(){
  var color = $(this).text();
  console.log(color);
  $('h1').css('color', color)
  //alert('about to make background color purple')
  //$('body').css('background-color','purple')
}
