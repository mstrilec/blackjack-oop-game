import { Hand } from './Hand'

export class Dealer {
	constructor() {
		this.hand = new Hand()
	}

	revealHiddenCard() {
		if (this.hand.cards.length > 0) {
			this.hand.cards[0].hidden = false
		}
	}
}
