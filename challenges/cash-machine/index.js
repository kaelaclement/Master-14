const wrapper = document.getElementById('wrapper');
const pinButton = document.getElementById('pinSubmit');
const pinEntered = document.getElementById('pin');
const pin = 1234;

const checkPin = (userInput) => {
	if (userInput == pin) {
		wrapper.innerHTML = `<h1>ta-da</h1>`;
	} else {
		alert('what happened');
	}
}

pinButton.addEventListener('click', () => {
	checkPin(pinEntered.value);
	pinEntered.value = '';
});