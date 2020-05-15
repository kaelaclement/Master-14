// get all those lovely DOM elements we'll need
const wrapper = document.getElementById('wrapper');
const transactions = document.getElementById('transactions');
const pinButton = document.getElementById('pinSubmit');
const pinEntered = document.getElementById('pin');
const acctEntered = document.getElementById('account');
const menu = document.getElementById('menu');
const checkBalanceButton = document.getElementById('checkBalance');
const withdrawButton = document.getElementById('withdrawal');
const depositButton = document.getElementById('deposit');
const exchangeButton = document.getElementById('exchange');
const changePinButton = document.getElementById('changePin');
const logOutButton = document.getElementById('logOut');

// will set this on login
let currentUser;

// this will eventually be more useful, but for now it hides away accounts...a little
let accounts = {
	123456789: {
		pin: 1234,
		balance: 1000
	}
}

// make sure the account exists
const checkAccount = accountNumber => {
	let account = accounts[accountNumber];
	if (account) {
		return true;
	} else {
		return false;
	}
}

// make sure the PIN matches the existing account
const checkPin = (accountNumber, pin) => {
	let account = accounts[accountNumber];
	if (checkAccount(accountNumber) && account.pin == pin) {
		return true;
	} else {
		return false;
	}
}

// trying login function
const logIn = () => {
	let tryAccount = acctEntered.value;
	let tryPin = pinEntered.value;

	let accountExists = checkAccount(tryAccount);
	let pinCorrect = checkPin(tryAccount, tryPin);

	if (accountExists && pinCorrect) {
		currentUser = accounts[tryAccount];
		showMenu();
	} else if (accountExists) {
		alert('Please enter correct PIN');
	} else {
		alert('Cannot find account');
	}
	pinEntered.value = '';
	acctEntered.value = '';
}

// check balance of current user
const checkBalance = () => {
	let content = document.createElement('p');
	content.innerText = `Your balance is: £${currentUser.balance}`;
	transactions.appendChild(content);
}

// withdraw amount of money - TODO: add £250 limit
const withdraw = () => {
	let amount = parseInt(prompt('How much would you like to withdraw?'));
	currentUser.balance = currentUser.balance - amount;
	let content = document.createElement('p');
	content.innerText = `Withdrawal: £${amount}\nNew Balance: £${currentUser.balance}`;
	transactions.appendChild(content);
}

// deposit user given amount - TODO: add £250 limit
const deposit = () => {
	let amount = parseInt(prompt('How much would you like to deposit?'));
	currentUser.balance = currentUser.balance + amount;
	let content = document.createElement('p');
	content.innerText = `Deposit: £${amount}\nNew Balance: £${currentUser.balance}`;
	transactions.appendChild(content);
}

// exchange money - TODO: take money out of account. use decimals, you know, like money
const exchange = () => {
	// get exchange amount and currency desired from user
	let amount = parseInt(prompt("How much would you like to exchange in GBP?"), 10);
	let toCurrency = prompt("Please enter 3 letter currency code (eg EUR)").toUpperCase();

	// declare exchange rate to set in switch statement
	let exchangeRate;

	// currently this only changes for euros
	let currencySymb = "$";

	// set exchange rate
	switch (toCurrency) {
		case "EUR":
			exchangeRate = 1.14;
			currencySymb = "€"
			break;
		case "USD":
			exchangeRate = 1.23;
			break;
		case "NZD":
			exchangeRate = 2.07;
			break;
		case "AUD":
			exchangeRate = 1.95;
			break;
		case "CAD":
			exchangeRate = 1.74;
			break;
		default:
			console.log(toCurrency);
			return "Sorry, I can't exchange that currency at this time.";
	}

	// floats are a thing, I'm sure of it
	let newAmount = Math.floor(amount * exchangeRate);

	// get what you did on that DOM
	let content = document.createElement('p');
	content.innerText = `Here is your ${currencySymb}${newAmount} ${toCurrency}`;
	transactions.appendChild(content);
}

// change user PIN
const changePin = () => {
	// get new PIN from user
	let newPin = parseInt(prompt("Enter new PIN"), 10);
	let pinConfirm = parseInt(prompt("Confirm new PIN."), 10);
	// make sure PINs match
	if (newPin == pinConfirm) {
		// record transaction if PIN is changed
		currentUser.pin = newPin;
		let content = document.createElement('p');
		content.innerText = `Your new PIN is ${currentUser.pin}`;
		transactions.appendChild(content);
	} else {
		alert("Sorry, PIN does not match. Try again.");
	}
}

const exit = () => {
	if (confirm('Are you sure you want to exit?')) {
		transactions.innerHTML = '';
		hideMenu();
		alert('Thanks for using this cash machine!');
		currentUser = undefined;
	}
}

// show menu on successful login
const showMenu = () => {
	menu.style.display = 'flex';
}

// will use this for log out
const hideMenu = () => {
	menu.style.display = 'none';
}

// pinButton.addEventListener('click', () => {
// 	let tryAccount = acctEntered.value;
// 	let tryPin = pinEntered.value;

// 	if (checkPin(tryAccount, tryPin)) {
// 		showMenu();
// 	}
// 	pinEntered.value = '';
// 	acctEntered.value = '';
// });

// pinButton.onclick = () => {
// 	let tryAccount = acctEntered.value;
// 	let tryPin = pinEntered.value;

// 	let accountExists = checkAccount(tryAccount);
// 	let pinCorrect = checkPin(tryAccount, tryPin);

// 	if (accountExists && pinCorrect) {
// 		currentUser = accounts[tryAccount];
// 		showMenu();
// 	} else if (accountExists) {
// 		alert('Please enter correct PIN');
// 	} else {
// 		alert('Cannot find account');
// 	}
// 	pinEntered.value = '';
// 	acctEntered.value = '';
// }
pinButton.onclick = logIn;
checkBalanceButton.onclick = checkBalance;
withdrawButton.onclick = withdraw;
depositButton.onclick = deposit;
exchangeButton.onclick = exchange;
changePinButton.onclick = changePin;
logOutButton.onclick = exit;