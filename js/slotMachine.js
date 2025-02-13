export const slotMachine = {
	symbols: ["♠", "♥", "♣", "♦"],
	slots: [],
	slotsAmount: 3,
	win: true,
	spin: function () {
		this.reset();

		for (let i = 0; i < this.slotsAmount; i++) {
			//3 keer loopen ingesteld in slotsamount
			console.log("spin");
			this.slots.push(this.getRandomSymbol()); //push nieuw element aan het einde. Dus 3 keer pushen.
		}

		this.calculateStatus();
	},

	calculateStatus: function () {
		this.win = this.slots.every((slot) => slot === this.slots[0]); //gaat nakijken of alle slots dezelfde waarde hebben als de eerste symbol die wordt weergeveven
	},
	getRandomSymbol: function () {
		const randomGetal = Math.floor(Math.random() * this.symbols.length); //lenth gaan nakijken van aantal symbolen, dus 4, deze dan x math random , math floor voor geheel getal.
		return this.symbols[randomGetal];
	},
	reset: function () {
		this.slots = [];
		this.win = false;
	},
};
