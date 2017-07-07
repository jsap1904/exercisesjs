//exercise 1

// var johnAge = 25;
// var johnHeight = 200;
// var mikeAge = 30;
// var mikeHeight = 180;
// var johnScore = johnHeight + 5 * johnAge;
// var mikeScore = mikeHeight + 5 * mikeAge;
// var annAge = 35;
// var annHeight = 163;
// var annScore = annHeight + 5 * annAge;


// 	if (johnScore > mikeScore && johnScore > annScore) {
// 		console.log ("John Wins with " + johnScore + " points!");
// 	}

// else if (mikeScore > johnScore && mikeScore > annScore) {
// 	console.log ("Mike Wins with " + mikeScore + " points!");
// }
// else if (mikeScore === johnScore || annScore === johnScore || annScore === mikeScore) {
// 	console.log ("DRAW!")
// }
// else if (annScore > johnScore && annScore > mikeScore) {
// 	console.log ("Ann Wins with " + annScore + " points!");
// }


//exercise 2

var years = [1980, 1985, 1990, 1995, 2000, 2017]
var ages = []
var fullAges = []

for(var i = 0; i < years.length; i++) {
	ages[i] = 2017 - years[i];
}
for (i=0; i < ages.length; i++) {

if (ages[i] >= 18) {
	console.log ("person " + (i + 1)  + " is full age");
} else {
	console.log ("person " + (i + 1) + " is not old enough");
	}
}