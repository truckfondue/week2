// $(document).on('ready', function() {
  
// });

// var myFunction = function() {
// 	console.log("you clicked the button.");
// }

$("#clickMe").on("click", function(){
	console.log("testing");
	$("h1").append("I love the weatherman!");
});

$("#clickMe2").on("click", function(){
	console.log("testing");
	$("h1").after("<h1>I am after</h1>");
});

$("#clickMe3").on("click", function(){
	console.log("testing");
	$("body").append(
		"<ul>Cheeba Hut"+
			"<li>Dogs</li>"+
			"<li>Cats</li>"+
			"<li>Bunnies</li>"+
		"</ul>");
});




				
			
			
