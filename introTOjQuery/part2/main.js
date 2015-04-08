$(document).on('ready', function() {

	$("a").on("click", function(e){
		var result = confirm("Are you certain that you wish to leave this page?");

		if (result === false) {
			$(this).remove();
			e.preventDefault();
		}
		// console.log("clicked the link")
	});

	// $(".url-link").remove();

	$("header").append("!")
  
});

$("p").hover(function(){$("p").css("color", "pink"); }, 
	function(){$("p").css("color", "black");	
});


	
