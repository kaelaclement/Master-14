const rollButton = document.getElementById('rollButton');
const diceDiv = document.getElementById('dice');
const scoreDiv = document.getElementById('score');

let score = 0;
let gameOver = false;
let won = false;

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

const setScore = (score, num) => {
	let newScore;
	if (score + num >= 21) {
		won = true;
		gameOver = true;
		newScore = 0;
	} else if (num == 1) {
		won = false;
		gameOver = true;
		newScore = 0;
	} else {
		gameOver = false;
		won = false;
		newScore = score + num;
	}

	return newScore;
}

const setScoreInfo = score => {
	if (gameOver && won) {
		return 'You won! :)';
	} else if (gameOver) {
		return 'You lost :(';
	} else {
		return `<p>${score}</p>`;
	}
}

const roll = () => {
	let num = Math.floor((Math.random() * 6) + 1);
	score = setScore(score, num);
	let scoreInfo = setScoreInfo(score);
	let dice = showDie(num);

	if (gameOver) {
		rollButton.value = 'Start over?';
	} else {
		rollButton.value = 'roll';
	}

	scoreDiv.innerHTML = scoreInfo;
	diceDiv.innerHTML = dice;
}

rollButton.onclick = roll;