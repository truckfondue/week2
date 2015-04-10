$(document).on('ready', function() {
	$('.submit-button').on("click", function(event){
		event.preventDefault();
		console.log('test');
		var $name = $('.name').val();
		console.log($name);
		$('#1').append($name);


		var $name = $('.bio').val();
		console.log($name);
		$('#2').append($name);

		var $name = $('.book').val();
		console.log($name);
		$('#3').append($name);

		var $name = $('.jslibraries').val();
		console.log($name);
		$('#4').append($name);

		$('input').val("");
		$('.submit-button').val("Submit");
	});

	$('.show-form').on('click', function(){
		$('form').toggle();
		$('button').text('Hide Form');

	});
  
});