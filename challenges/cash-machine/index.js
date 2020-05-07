const wrapper = document.getElementById('wrapper');
const pinButton = document.getElementById('pinSubmit');
const pinEntered = document.getElementById('pin');
const pin = 1234;

const checkPin = (userInput) => {
	if (userInput == pin) {
		wrapper.innerHTML = menu();
	} else {
		alert('what happened');
	}
}

pinButton.addEventListener('click', () => {
	checkPin(pinEntered.value);
	pinEntered.value = '';
});

const menu = () => {
	const menuText =
		`<p>What would you like to do?</p><br>
	<input type="button" id="checkBalance"><br>
	<input type="button" id="withdrawal">`
	return menuText;
}