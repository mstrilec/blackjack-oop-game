export class Hand {
	constructor() {
		this.cards = []
	}

	addCard(card) {
		this.cards.push(card)
	}

	clear() {
		this.cards = []
	}

	get value() {
		let value = 0
		let aces = 0

		for (const card of this.cards) {
			if (!card.hidden) {
				value += card.numericValue
				if (card.value === 'A') aces++
			}
		}

		while (value > 21 && aces > 0) {
			value -= 10
			aces--
		}

		return value
	}

	get isBlackjack() {
		return this.cards.length === 2 && this.value === 21
	}

	get isBusted() {
		return this.value > 21
	}
}
