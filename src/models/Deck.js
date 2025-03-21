import { Card } from './Card'

export class Deck {
	constructor() {
		this.cards = []
		this.init()
		this.shuffle()
	}

	init() {
		const suits = ['hearts', 'diamonds', 'clubs', 'spades']
		const values = [
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'J',
			'Q',
			'K',
			'A',
		]

		this.cards = []

		for (const suit of suits) {
			for (const value of values) {
				this.cards.push(new Card(suit, value))
			}
		}
	}

	shuffle() {
		for (let i = this.cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
		}
	}

	deal() {
		if (this.cards.length === 0) {
			this.init()
			this.shuffle()
		}
		return this.cards.pop()
	}
}
