(function(){

  $(document).ready(initialize);

  function initialize (){
    $('button').click(clickbutton);
  }

  var clickCount = 0;

  function clickbutton() {
    clickCount = clickCount + 1
    if(clickCount % 5 == 0) {
      Materialize.toast('Level up!', 3000);
    } else {
      Materialize.toast('+1 xp', 3000);
    }
  }

})();
