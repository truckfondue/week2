$(document).on('ready', function() {
	

	$('.submit-button').on('click', function(event){
		event.preventDefault();
		console.log('test');
		
// These variable are accessible via the form allowing the user to make changes to their profile

		var $name = $('.name').val();
		console.log($name);
		$('#1').text($name);


		var $name = $('.bio').val();
		console.log($name);
		$('#2').text($name);

		var $name = $('.book').val();
		console.log($name);
		$('#3').text($name);

		var $name = $('.jslibraries').val();
		console.log($name);
		$('#4').text($name);

	

// Resett the page after the submit button is clicked

		$('input').val();
		$('.submit-button').val("Submit");
		$('button').text('Show Form');
		$('form').toggle();
	});

	$('.show-form').on('click', function(){
		$('form').toggle();
		$('button').text('Hide Form');
	});

	// Toggles the show-form buttom to hide-form variation without involving the submit button

	$('.show-form').on('click', function(){
		if ( $('form').css('display') === 'none' ) {
			$('button').text('Show Form');
		}
	

	});
  
});