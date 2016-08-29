(function(){
  $(document).ready(initialize);

  function initialize(){
    $('button').click(changecolor);


  $('#yellow').click(colorYellow);
  $('#purple').click(colorPurple);
       var myVariable = 'Hello World';

   console.log(myVariable);
  //  addition(8,4);
}


  function addition(x,y){
      var z = x + y;
      alert(z)
  }




  function colorYellow(){
    // alert('I Get The Drip From My Walk');
    $('h1').css('color','gold');


}

  function colorPurple(){
  // alert('I Get The Drip From My Walk');
  $('h1').css('color','purple');


}
  function colorGreen(){
  // alert('I Get The Drip From My Walk');
  $('h1').css('color','green');


}
  function colorSkyblue(){
  // alert('I Get The Drip From My Walk');
  $('h1').css('color','skyblue');


}

function changecolor(){
  var newcolor = $(this).text();
  $('h1').css('color', newcolor);
}
})();
