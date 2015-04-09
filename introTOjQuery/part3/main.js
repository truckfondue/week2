$(document).on('ready', function() {
	$(".button-div").on("click", function() {
		$("body").append("<div class='pop-up'><button class='hide'>Click to Hide!</button></div>");
		$(this).hide();
		$(".pop-up").on("click", function() {
			$(this).hide();
			$(".button-div").show();
			// <div class="button-div">
		});

	});

	
  
});