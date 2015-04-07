// Function Practive #1

// tripleFive


// var tripleFive = function() {
// 	for (var i=0; i < 3; i++) {
// 		 console.log("five!")
		
// 	}
	
// } 

var tripleFive = function() {
	return "five!\nfive!\nfive!";	
	}
// console.log(tripleFive());




// lastLetter

var lastLetter = function() {
	var word = prompt("enter a word");
	return word.charAt(word.length -1) ;
	}
// console.log(lastLetter());

// var square = function() {
// 	var number = prompt("enter a number");
// 	return number*number;
// }

var square = function(a) {
	return a*a;
	}
// console.log(square());

// Cubes a number. based on the square fn

var cube = function(a) {
	return a * square(a);
	}
// console.log(cube());
// Negate

var negate = function(a){
	return -a;
}
// console.log(negate());

// Makes three items an Array

var toArray = function(a,b,c){
	var array = [a,b,c];
	return array;
}

// console.log(toArray());

var startsWithA = function(){
	var word = prompt("enter a word");
	console.log(typeof word);
	word = word.toUpperCase();
	var startsWith = word.charAt(0);
		if (startsWith === "A") {
			return true;
		}
	}
// console.log(startsWithA());

var excite = function (){
	var word = prompt("enter a word");
	return word + "!!!";
}
// console.log(excite());

var sun = function(){
	var word = prompt("enter a word");
	if (word.toUpperCase().indexOf("SUN") >= 0 ){
		return true;
	} else {
		return false;
	}
}
// console.log(sun());

// return word.toUpperCase().indexOf("SUN") >= 0;

var tiny = function(){
	var number = prompt("enter a number");
	return (number > 0 && number < 1);
}

// console.log(tiny());

var getSeconds = function(){
	var time = prompt("Enter a time in MM:SS");
	timeArray = time.split(":");
	return (timeArray[0]*60 + (+timeArray[1]) + "  seconds");

}

console.log(getSeconds());



