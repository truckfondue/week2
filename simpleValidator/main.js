var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};


var phoneNumber = prompt("Enter your phone number with dashes 123-456-7890: ");

// var a = isNumber(phoneNumber.substring(0,3));
// var b = isNumber(phoneNumber.substring(4,7));
var c = isNumber(phoneNumber.substring(8,12));

alert (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-");



var birthDate = prompt("Enter your birth date (mm/dd/yy format): ");

var d = isNumber(birthDate.substring(0,2));
var e = isNumber(birthDate.substring(3,5));
var f = isNumber(birthDate.substring(6,8));

alert ((birthDate.charAt(2) === "/") && (birthDate.charAt(5) === "/") && (birthDate.length === 8 ));





var postalCode = prompt("Enter your postal code (12345 or 12345-6789): ");

var g = isNumber(postalCode.substring(0,5);
var h = isNumber(postalCode.substring(6,10));

alert ((postalCode.length === 5) || (postalCode.length === 10 && postalCode.charAt(5) === "-"));



var stateAbbreviation = prompt("Enter your State's two character abbreviation (be sure to use all caps): ")
alert ((stateAbbreviation.length === 2) && (stateAbbreviation === stateAbbreviation.toUpperCase()));

var married = prompt("Are you married? Enter Yes/No: ");
alert ((married.toUpperCase() === "YES") || (married.toUpperCase() === "NO"))

// It's important to go back and check if the variables phoneNumber, birthDate and postalCode are indeed numbers?

