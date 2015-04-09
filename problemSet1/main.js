// Capitalize the first letter of every word in a string?


	// var letterCapitalize = function() {
	// 	var sentence = prompt("Enter a statement consisting of words: ");
	// 	var sentenceArray = sentence.split(" ");
	// 	for (var i = 0; i < sentenceArray.length; i++) {
	// 		sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].substring(1);
	// 		}
	// 	return sentenceArray.join(" ");
	// };

	// var wordCount = function() {
	// 	var	text = prompt("Want to know how many words are in your text?\nPaste it here: ");
	// 	var arrayOfWords = text.split(" ");
	// 	var numberOfWords = arrayOfWords.length;
	// 	console.log("Your text contains " + numberOfWords + " words. \nWOW!");
	// };


function isPrime(n) {
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 	if (n%2==0) return (n==2);
 	if (n%3==0) return (n==3);
	var m=Math.sqrt(n);
 		for (var i=5;i<=m;i+=6) {
	  		if (n%i==0)     return false;
	  		if (n%(i+2)==0) return false;
 	}
 	return true;
}