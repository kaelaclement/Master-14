const rollButton = document.getElementById('rollButton');
const diceDiv = document.getElementById('dice');
const scoreDiv = document.getElementById('score');

// let score = 0;
let gameOver = false;
// let won = false;

let playerOne = {
	score: 0,
	won: false
};

const showDie = num => {
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

const setScore = (num, player) => {
	let newScore;
	if (player.score + num >= 21) {
		player.won = true;
		gameOver = true;
		newScore = 0;
	} else if (num == 1) {
		player.won = false;
		gameOver = true;
		newScore = 0;
	} else {
		gameOver = false;
		player.won = false;
		newScore = player.score + num;
	}

	return newScore;
}

const setScoreInfo = player => {
	if (gameOver && player.won) {
		return 'You won! :)';
	} else if (gameOver) {
		return 'You lost :(';
	} else {
		return `<p>${player.score}</p>`;
	}
}

const roll = (player) => {
	let num = Math.floor((Math.random() * 6) + 1);
	player.score = setScore(num, player);
	let scoreInfo = setScoreInfo(player);
	let dice = showDie(num);

	if (gameOver) {
		rollButton.value = 'Start over?';
	} else {
		rollButton.value = 'roll';
	}

	scoreDiv.innerHTML = scoreInfo;
	diceDiv.innerHTML = dice;
}

rollButton.onclick = () => roll(playerOne);