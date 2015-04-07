
// Array of objects. 



var numVictims = prompt("How many disaster victims would you like to save?");

var victims = [];

for (i = 1; i <= numVictims; i++) {
	var name = prompt("name");
	var phoneNumber = prompt("phoneNumber");
	var street = prompt("street");
	var victim = {
		name: name,
		phoneNumber: phoneNumber,
		street: street,
	}
	victims.push(victim);

}

	var tempVictimNames = [];
	for (i = 0; i < victims.length; i++) {
		tempVictimNames.push(victims[i].name)
	}

// Array of objects

var numVoluteers = prompt("How many volunteers are available?");

var volunteers = [];

for (i = 1; i <= numVoluteers; i++) {
	var name = prompt("name");
	var phoneNumber = prompt("phoneNumber");
	var street = prompt("street");
	var volunteer = {
		name: name,
		phoneNumber: phoneNumber,
		street: street,
	}
	volunteers.push(volunteer);
	

}

var tempNames = [];
	for (i = 0; i < volunteers.length; i++) {
		tempNames.push(volunteers[i].name)
	}

alert("There are " + victims.length + " victims to the " + volunteers.length + " volunteers.\n" + tempNames + "\n" + tempVictimNames);

// console.log(victims);
// console.log(volunteers);