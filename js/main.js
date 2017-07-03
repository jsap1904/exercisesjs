var johnAge = 25
var johnHeight = 170
var mikeAge = 30
var mikeHeight = 182
var johnScore = johnHeight + (johnAge * 5)
var mikeScore = mikeHeight + (mikeAge * 5)

var game = function() {
	if(johnScore > mikeScore)
		return ("John Wins with " + johnScore + "points!");
}
if (mikeScore > johnScore) {
	return ("Mike Wins with " + mikeScore + "points!");
}
if (mikeScore === johnScore) {
	return ("DRAW!")
}
else {
	return("try again!")
}