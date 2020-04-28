/**
 * 1. Accept user PIN
 * 2. Check PIN
 * 3. Withdraw
 * 		a.Check withdraw limit (£250) per use
 * 4. Deposit £250 at a time
 * 5. Change PIN with validation
 * 6. Check balance
 * 7. Statement of transactions
 * 8. Exchange currency - eg. GBP to USD
 */

// My program needs these variables
let pin = 1234;
let balance = 1000;
let withdrawalTotal = 0;
let actions = [];

// And these functions

// Requirement 1 & 2 - accept and check user PIN (3 attempt limit)
const checkPinSuccess = () => {
	let attemptsLeft = true;
	let attempts = 0;

	while (attemptsLeft) {
		let userInput;
		switch (attempts) {
			case 0:
				userInput = prompt("Please enter your PIN");
				attempts++;
				break;
			case 1:
			case 2:
				attempts++;
				userInput = prompt("Incorrect PIN, please try again.");
				break;
			case 3:
				attemptsLeft = false;
				alert("Too many failed attempts, try again later.");
				return false;
			default:
				attemptsLeft = false;
				alert("What have you done???");
				return false;
				break;
		}

		if (userInput == pin) {
			attemptsLeft = false;
			return true;
		}
	}
}

// Requirement 3 - withdraw £250/program run
const withdraw = amount => {
	if (amount <= 250 && withdrawalTotal + amount <= 250) {
		balance -= amount;
		withdrawalTotal += amount;
		actions.push(`Withdrew £${amount}`);
		return `You have £${balance} remaining`;
	} else {
		console.log(withdrawalTotal);
		return "Sorry, you can only withdraw £250 a day."
	}
}

// Requirement 4 - deposit £250 at a time
const deposit = amount => {
	if (amount <= 250) {
		balance += amount;
		actions.push(`Deposited £${amount}`);
		return `You now have £${balance}`;
	} else {
		return "Sorry, you can only deposit £250 at a time.";
	}
}

// Requirement 5 - change PIN with validation
const changePin = () => {
	let newPin = parseInt(prompt("Enter new PIN"), 10);
	let pinConfirm = parseInt(prompt("Confirm new PIN."), 10);
	if (newPin == pinConfirm) {
		actions.push(`Changed PIN`);
		pin = newPin
		return `Your new PIN is ${pin}.`
	} else {
		return "Sorry, PIN does not match. Try again."
	}
}

// Requirement 6 - check balance with optional crying
const checkBalance = () => {
	actions.push(`Checked balance`);
	return balance;
}

// Requirement 7 - statement of actions
const exitSequence = () => {
	let receipt = prompt("Would you like a transcript of your transactions? Y/N").toUpperCase();

	let text = actions.map(action => `${action}`).join("\n");

	if (receipt == "Y") {
		alert(text);
	} else if (receipt == "N") {
		alert("thank you for using your cash machine!");
	} else {
		alert("Please enter \"Y\" or \"N\"");
		exitSequence();
	}
}

// Requirement 8 - exchange currency
const exchange = () => {
	let amount = parseInt(prompt("How much would you like to exchange in GBP?"), 10);
	let toCurrency = prompt("Please enter 3 letter currency code (eg EUR)").toUpperCase();
	let exchangeRate;
	let currencySymb = "$";
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

	let newAmount = Math.floor(amount * exchangeRate);

	actions.push(`Exchanged £${amount} GBP for ${currencySymb}${newAmount} ${toCurrency}`)

	return `Here is your ${currencySymb}${newAmount} ${toCurrency}`;

}

// The interactive part, choose what you want to do etc.
const runCashMachine = () => {
	let exit = false;

	while (exit == false) {
		let selection = prompt(
			`What would you like to do?
			1. Check balance
			2. Withdrawal
			3. Deposit
			4. Exchange currency
			5. Change PIN
			6. Exit`
		);
		selection = parseInt(selection, 10);

		switch (selection) {
			case 1:
				alert(`£${checkBalance()}`);
				break;
			case 2:
				let withdrawAmount = parseInt(prompt("How much would you like to withdraw?"), 10);
				alert(withdraw(withdrawAmount));
				break;
			case 3:
				let depositAmount = parseInt(prompt("How much are you depositing?"), 10);
				alert(deposit(depositAmount));
				break;
			case 4:
				alert(exchange());
				break;
			case 5:
				alert(changePin());
				break;
			case 6:
				exit = true;
				exitSequence();
				break;
			default:
				alert("Please choose a valid option.");
				break;
		}
	}
}

// ######## Run the actual program ########
if (checkPinSuccess()) {
	runCashMachine();
}