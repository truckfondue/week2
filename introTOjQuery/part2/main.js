$(document).on('ready', function() {

	$(".url-link").on("click", function(e){
		// return false;
		confirm("Are you certain that you wish to leave this page?");
		// if false {
		// 	$(".url-link").remove;
		// }
		console.log("clicked the link")
	});
  
});

$("p").hover(function(){$("p").css("color", "pink"); $("header").append("!")}, 
	function(){$("p").css("color", "black");	
});

// $("header").append("!");

$("#href").on("click", function(){
	confirm("Do you wish to go to " + href);
	if (true) {

	} else {
		$(".href").remove;
	}
});
	
