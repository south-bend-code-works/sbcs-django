$(function() {

  $(document).ready(init);

  var text_max = 300;
   $('#textarea_feedback3').html(text_max + ' characters remaining');

   $('#textarea3').keyup(function() {
       var text_length = $('#textarea3').val().length;
       var text_remaining = text_max - text_length;

       $('#textarea_feedback3').html(text_remaining + ' characters remaining');
     });

  var text_max = 300;
   $('#textarea_feedback2').html(text_max + ' characters remaining');

   $('#textarea2').keyup(function() {
       var text_length = $('#textarea2').val().length;
       var text_remaining = text_max - text_length;

       $('#textarea_feedback2').html(text_remaining + ' characters remaining');
     });

     var text_max = 300;
      $('#textarea_feedback').html(text_max + ' characters remaining');

      $('#textarea').keyup(function() {
          var text_length = $('#textarea').val().length;
          var text_remaining = text_max - text_length;

          $('#textarea_feedback').html(text_remaining + ' characters remaining');
        });

  var femDonut = 0;
  var minDonut= 0;

  function init() {
    $('#myDoughnutFem').waypoint(function() {
       femDonut = femDonut+1;
       if(femDonut == 1){
         createDonutFemale();
       }
    }, {
       offset: '90%'
    });

    $('#myDoughnutMin').waypoint(function() {
       minDonut = minDonut+1;
       if(minDonut == 1){
         createDonutMin();
       }
    }, {
       offset: '90%'
    });


    $(window).resize(function(){
      fullscreen();
      fullwidth();
    });

    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
  }

  function listenScrollFem(){
    $('#myDoughnutFem').scrollTop();
  }

  function fullwidth(){
    $('.fullWidth').css({
      width: $(window).width(),
    });
  }

  function fullscreen(){
    $('#fullScreen').css({
      width: $(window).width(),
      height: $(window).height()
    });
  }

  function createDonutFemale(){
    var mediumDoughnutData = [
				{value:56,color:"#F7931E"},
				{value:100-56,color:"#dce0df"}
			];

		$( "#myDoughnutFem" ).doughnutit({
			dnData: mediumDoughnutData,
		    dnSize: 230,
		    dnInnerCutout: 60,
		    dnAnimation: true,
			dnAnimationSteps: 60,
			dnAnimationEasing: 'linear',
			dnStroke: false,
			dnShowText: true,
			dnFontSize: '40px',
      dnFontStyle: 'bold',
			dnFontOffset: 30,
			dnFontColor: "black",
			dnText: '56%',
			dnStartAngle: -90,
			dnCounterClockwise: false,

		});// End Doughnut
  }

  function createDonutMin() {
    var mediumDoughnutData = [
				{value:70.67,color:"#00BFFF"},
				{value:100-70.67,color:"#dce0df"}
			];

		$( "#myDoughnutMin" ).doughnutit({
			dnData: mediumDoughnutData,
		    dnSize: 230,
		    dnInnerCutout: 60,
		    dnAnimation: true,
			dnAnimationSteps: 60,
			dnAnimationEasing: 'linear',
			dnStroke: false,
			dnShowText: true,
			dnFontSize: '40px',
      dnFontStyle: 'bold',
			dnFontOffset: 30,
			dnFontColor: "black",
			dnText: '71%',
			dnStartAngle: -90,
			dnCounterClockwise: false,
		});// End Doughnut
  }


});
