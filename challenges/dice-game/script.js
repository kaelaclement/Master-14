const rollButton = document.getElementById('rollButton');

const roll = () => {
	let num = Math.floor((Math.random() * 6) + 1);
	console.log(num);
}

rollButton.onclick = roll;