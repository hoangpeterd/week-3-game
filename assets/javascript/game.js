	var winCount = 0;
	var lossCount = 0;
	var guessCounter = 9;
	var guessesSoFar = [];
	var compChoice;
	var letters = ["a", "b", "c", " d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


	//reset the game when guess counter is 0
	function gameOver() {
		guessCounter = 9;
		guessesSoFar = [];
		compChoice = genCompChoice();
}
	//letter the computer has chosen that the user has to guess
	function genCompChoice () {
	compChoice = letters[Math.floor(Math.random() * letters.length)];
		return compChoice;
	}

	compChoice = genCompChoice();

	document.onkeyup = function(event) {
		//get the letter the user presses on their keyboard
		var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
		//decrement the guess counter
		guessCounter--;
		//show the user the letter they have used so far
		guessesSoFar.push(userChoice);

		if (userChoice === compChoice) {
			winCount++;
			gameOver();
		} else {
			//if player doesnt have any guesses left
			//increase the loss count
			if (guessCounter < 0) {
			lossCount++;
			gameOver ();
			}
		}

		document.querySelector("#winCount").innerHTML = winCount;
		document.querySelector("#lossCount").innerHTML = lossCount;
		document.querySelector("#guessCounter").innerHTML = guessCounter;
		document.querySelector("#guesses").innerHTML = guessesSoFar.join(", ");
	};