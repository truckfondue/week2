var input = prompt("Please enter a word: ");
alert("You entered: " + input);
alert("There are " + input.length + " letters in the word.");
alert("The third character in the word is " + input.charAt(2));
alert(input.toLowerCase());
alert(input.toUpperCase());
alert("Example: I have wanted a " + input + " since I was a little boy.");
alert("Subword: " + input.substring(1,4));