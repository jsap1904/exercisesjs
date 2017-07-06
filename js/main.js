var johnAge = 25;
var johnHeight = 200;
var mikeAge = 30;
var mikeHeight = 180;
var johnScore = johnHeight + 5 * johnAge;
var mikeScore = mikeHeight + 5 * mikeAge;
var annAge = 35;
var annHeight = 163;
var annScore = annHeight + 5 * annAge;


	if (johnScore > mikeScore && johnScore > annScore) {
		console.log ("John Wins with " + johnScore + " points!");
	}

else if (mikeScore > johnScore && mikeScore > annScore) {
	console.log ("Mike Wins with " + mikeScore + " points!");
}
else if (mikeScore === johnScore || annScore === johnScore || annScore === mikeScore) {
	console.log ("DRAW!")
}
else if (annScore > johnScore && annScore > mikeScore) {
	console.log ("Ann Wins with " + annScore + " points!");
}
