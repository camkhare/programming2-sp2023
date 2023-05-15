let playerHand = []
let dealerHand = []
let dealerSum = 0
var userCards = document.getElementById("user-cards");
var dealerCards = document.getElementById("dealer-cards");
var sumOfUser = document.getElementById("user-sum");
var gameisgoing = true;
var hitbutton = document.getElementById("hit");
hitbutton.disabled = false;
var standbutton = document.getElementById("stand");
standbutton.disabled = false;



function openInstructions() {
	const modal = document.getElementById("myModal");
	modal.style.display= "block";
}

function closeInstructions() {
	const modal = document.getElementById("myModal");
	modal.style.display= "none";
}

function hit(){
	let card1 = getCard();
	playerHand.push(card1)
	userCards.innerText = "User cards: " + playerHand
	userSum = userSum + card1
	sumOfUser.innerText = "Sum of your cards:" + userSum

	if (userSum > 21) {
	alert("You have busted")
}

}

function stay(){
	while (dealerSum < 16) {
	  	let card1 = getCard();
		dealerHand.push(card1)
		dealerCards.innerText = "Dealer cards: " + dealerHand
		dealerSum = card1 + dealerSum
	}
	checkForEndCondition()

}

function reset(){
	//reset variables
	dealerHand = []
	playerHand = []

	// deal 2 cards to user
	let card1 = getCard();
	playerHand.push(card1)
	let card2 = getCard();
	playerHand.push(card2)
	// deal 2 cards dealer 
	let card3 = getCard();
	dealerHand.push(card3)
	let card4 = getCard();
	dealerHand.push(card4)

	userSum = card1 + card2
	dealerSum = card3 + card4

	userCards.innerText = "User cards: " + playerHand
	dealerCards.innerText = "Dealer cards: " + dealerHand
	sumOfUser.innerText = "Sum of your cards:" + userSum

	standbutton.disabled = false;
	hitbutton.disabled = false;
	//reset ui cards	
	// update ui
}

function getCard(){
	var minInt = 1;
	var maxInt = 10;
	var card = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
	return card;
	// draw a card at randpm
}

function checkForEndCondition(){
	if (dealerSum > 21) {
		alert("You Win")
		hitbutton.disabled = true;
		standbutton.disabled = true;
	}
	else if (dealerSum == userSum) {
		alert("You Tied")
		hitbutton.disabled = true;
		standbutton.disabled = true;
	}
	else if (dealerSum > userSum) {
		alert("Dealer Wins")
		hitbutton.disabled = true;
		standbutton.disabled = true;
	}
	else {
		alert("User Wins")
		hitbutton.disabled = true;
		standbutton.disabled = true;
	}
	// get user sum and dealer
	// if dealer is over 21, user wins
	// if user is over 21, dealer wins
	// else if dealer sum == user sum -> tie
	// else if dealer sum > user sum -> dealer wins
	// else user wins
}