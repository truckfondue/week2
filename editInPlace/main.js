$(document).on('ready', function() {
	var $editable = $('.editable').on('click', function(){
		console.log("testing");
		var $originalValue = $(this).text();
		$(this).html("<input type='text' value='"+ $originalValue+"'>");
	});

	// var $lastName = $('.lastName').on('click', function(){
	// 	console.log("testing")
	// });

  
});