export class Card {
	constructor(suit, value) {
		this.suit = suit
		this.value = value
		this.hidden = false
	}

	get numericValue() {
		if (['J', 'Q', 'K'].includes(this.value)) return 10
		if (this.value === 'A') return 11
		return parseInt(this.value)
	}

	get suitSymbol() {
		const symbols = {
			hearts: '♥',
			diamonds: '♦',
			clubs: '♣',
			spades: '♠',
		}
		return symbols[this.suit]
	}

	get color() {
		return ['hearts', 'diamonds'].includes(this.suit) ? 'red' : 'black'
	}
}
