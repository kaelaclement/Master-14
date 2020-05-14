class Game {
	constructor(numPlayers) {
		this.gameOver = false;
		this.players = new Array(numPlayers).fill(0);
	}

	showDie(num) {
		switch (num) {
			case 1:
				return '<img src="./img/dice1.png">';
			case 2:
				return '<img src="./img/dice2.png">';
			case 3:
				return '<img src="./img/dice3.png">';
			case 4:
				return '<img src="./img/dice4.png">';
			case 5:
				return '<img src="./img/dice5.png">';
			case 6:
				return '<img src="./img/dice6.png">';
			default:
				return 'you shouldn\'t be here';
		}
	}

	checkWin(num) {
		if (num == 1) {
			return false;
		}
	}

	setScore(num, player) {
		let currentScore = this.players[player - 1];
		let newScore;
		if (currentScore + num >= 21) {
			newScore = 0;
		} else if (num == 1) {
			newScore = 0;
		} else {
			newScore = currentScore + num;
		}

		this.players[player - 1] = newScore;
	}

}

let testGame = new Game(2);

testGame.setScore(5, 1);
testGame.setScore(3, 2);
testGame.setScore(6, 1);
console.log(testGame.players);