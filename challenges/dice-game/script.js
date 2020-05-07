const rollButton = document.getElementById('rollButton');
const diceDiv = document.getElementById('dice');
const scoreDiv = document.getElementById('score');

let score = 0;
let gameOver = false;

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

const setScore = (num) => {
	if (score + num >= 21) {
		score = 0;
		gameOver = true;
		return 'You won! :)';
	} else if (num == 1) {
		score = 0;
		gameOver = true;
		return 'You lost :(';
	} else {
		gameOver = false;
		score += num;
		return `<p>${score}</p>`;
	}
}

const roll = () => {
	let num = Math.floor((Math.random() * 6) + 1);
	let scoreInfo = setScore(num);
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