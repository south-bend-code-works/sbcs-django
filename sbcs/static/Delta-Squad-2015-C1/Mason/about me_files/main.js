(function(){
  $(document).ready (intialize)
  function intialize (){
    $('#brown').click('colorbrown');
    $('#black').click('colorblack');
  }
  function colorbrown(){
    $('h1').css('color', 'brown');
  }

  function colorblack(){
      $('h1').css('color', 'black');
  }





})();
