import { slotMachine } from "./slotMachine.js";

function init() {
	console.log("Init");
	console.log(document);
	const button = document.querySelector("#button");
	console.log(button);
	button.addEventListener("click", () => {
		console.log("button clicked");
		pullLever();
	});
}

function pullLever() {
	slotMachine.spin(); //machine gaan spinnen met spin function in de slotmachine.js
	showSlots();
	showGameResult();
}

function showSlots() {
	const resultaat = document.querySelector("#result");
	resultaat.innerHTML = "";

	slotMachine.slots.forEach((symbol) => {
		const span = document.createElement("span"); //span aanmaken.
		span.textContent = symbol; //symbolen gaan zoeken in de symbols
		span.classList.add(symbol); //classe bijvoegen bij symbol voor rode color te gaan
		resultaat.appendChild(span); //aanmaak van <span class="♥">♥</span>
	});
}

function showGameResult() {
	const eindResultaat = document.querySelector("#status"); //status gaan selecteren
	eindResultaat.textContent = slotMachine.win
		? "JE WINT 🎉💰"
		: "JE VERLIEST 😭🥺";
}

init();
