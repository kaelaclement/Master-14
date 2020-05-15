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

let currentUser;

let accounts = {
	123456789: {
		pin: 1234,
		balance: 1000
	}
}

const checkAccount = accountNumber => {
	let account = accounts[accountNumber];
	if (account) {
		return true;
	} else {
		return false;
	}
}

const checkPin = (accountNumber, pin) => {
	let account = accounts[accountNumber];
	if (checkAccount(accountNumber) && account.pin == pin) {
		return true;
	} else {
		return false;
	}
}

const checkBalance = () => {
	let content = document.createElement('p');
	content.innerText = `Your balance is: £${currentUser.balance}`;
	transactions.appendChild(content);
}

const withdraw = () => {
	let amount = parseInt(prompt('How much would you like to withdraw?'));
	currentUser.balance = currentUser.balance - amount;
	let content = document.createElement('p')
	content.innerText = `Withdrawal: £${amount}\nNew Balance: £${currentUser.balance}`
	transactions.appendChild(content);
}

const deposit = () => {
	let amount = parseInt(prompt('How much would you like to deposit?'));
	currentUser.balance = currentUser.balance + amount;
	let content = document.createElement('p');
	content.innerText = `Deposit: £${amount}\nNew Balance: £${currentUser.balance}`
	transactions.appendChild(content);
}

const showMenu = () => {
	menu.style.display = 'flex';
}

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

pinButton.onclick = () => {
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

checkBalanceButton.onclick = checkBalance;
withdrawButton.onclick = withdraw;
depositButton.onclick = deposit;
exchangeButton.onclick = () => {
	alert('that\'s the exchange button, alright');
}