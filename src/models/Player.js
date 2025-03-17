import { Hand } from './Hand'

export class Player {
	constructor(balance = 1000) {
		this.hand = new Hand()
		this.balance = balance
		this.bet = 0
		this.wins = 0
		this.losses = 0
		this.draws = 0
	}

	placeBet(amount) {
		if (amount > this.balance) {
			return false
		}

		this.bet = amount
		this.balance -= amount
		return true
	}

	win(multiplier = 2) {
		const winnings = this.bet * multiplier
		this.balance += winnings
		this.wins++
		this.bet = 0
		return winnings
	}

	lose() {
		this.losses++
		this.bet = 0
	}

	draw() {
		this.balance += this.bet
		this.draws++
		this.bet = 0
	}
}
