(function(){
  $(document).ready(initialize);

  function initialize(){
    alert('Welcome To Panda Khatt');
$('button').click(changeColor);
}

function changeColor(){
   var myColor = $(this).text();
   $('h1').css('color', myColor);
  }
})();
