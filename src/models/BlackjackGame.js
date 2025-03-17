import { Dealer } from './Dealer'
import { Deck } from './Deck'
import { Player } from './Player'

export class BlackjackGame {
	constructor() {
		this.deck = new Deck()
		this.player = new Player()
		this.dealer = new Dealer()
		this.gameState = 'betting' // betting, playing, dealerTurn, gameOver
		this.statusMessage = 'Ласкаво просимо! Зробіть ставку, щоб почати гру.'
		this.statusType = 'info'
	}

	placeBet(betAmount) {
		if (isNaN(betAmount) || betAmount < 10) {
			this.statusMessage = 'Ставка повинна бути не менше 10'
			this.statusType = 'error'
			return false
		}

		if (!this.player.placeBet(betAmount)) {
			this.statusMessage = 'Недостатньо коштів для ставки'
			this.statusType = 'error'
			return false
		}

		this.gameState = 'playing'
		this.dealInitialCards()

		if (this.player.hand.isBlackjack) {
			if (this.dealer.hand.isBlackjack) {
				this.dealer.revealHiddenCard()
				this.statusMessage = 'Обидва мають блекджек! Нічия!'
				this.statusType = 'draw'
				this.player.draw()
				this.gameState = 'gameOver'
			} else {
				this.dealer.revealHiddenCard()
				this.statusMessage = 'Блекджек! Ви виграли з коефіцієнтом 1.5!'
				this.statusType = 'win'
				this.player.win(2.5)
				this.gameState = 'gameOver'
			}
		} else {
			this.statusMessage = 'Ваш хід!'
			this.statusType = 'info'
		}

		return true
	}

	dealInitialCards() {
		this.player.hand.clear()
		this.dealer.hand.clear()

		this.player.hand.addCard(this.deck.deal())

		const dealerFirstCard = this.deck.deal()
		dealerFirstCard.hidden = true
		this.dealer.hand.addCard(dealerFirstCard)

		this.player.hand.addCard(this.deck.deal())
		this.dealer.hand.addCard(this.deck.deal())
	}

	playerHit() {
		if (this.gameState !== 'playing') return false

		this.player.hand.addCard(this.deck.deal())

		if (this.player.hand.isBusted) {
			this.dealer.revealHiddenCard()
			this.statusMessage = 'Перебір! Ви програли.'
			this.statusType = 'lose'
			this.player.lose()
			this.gameState = 'gameOver'
		} else {
			this.statusMessage = 'Ваш хід!'
			this.statusType = 'info'
		}

		return true
	}

	playerStand() {
		if (this.gameState !== 'playing') return false

		this.gameState = 'dealerTurn'
		this.dealer.revealHiddenCard()

		while (this.dealer.hand.value < 17) {
			this.dealer.hand.addCard(this.deck.deal())
		}

		this.evaluateWinner()
		return true
	}

	evaluateWinner() {
		const playerValue = this.player.hand.value
		const dealerValue = this.dealer.hand.value

		if (this.dealer.hand.isBusted) {
			this.statusMessage = 'Дилер перебрав! Ви виграли!'
			this.statusType = 'win'
			this.player.win()
		} else if (playerValue > dealerValue) {
			this.statusMessage = 'Ви виграли!'
			this.statusType = 'win'
			this.player.win()
		} else if (playerValue < dealerValue) {
			this.statusMessage = 'Дилер виграв!'
			this.statusType = 'lose'
			this.player.lose()
		} else {
			this.statusMessage = 'Нічия!'
			this.statusType = 'draw'
			this.player.draw()
		}

		this.gameState = 'gameOver'
	}

	newGame() {
		if (this.player.balance < 10) {
			this.player.balance = 1000
			this.statusMessage = 'Ваш баланс оновлено до ₴1000'
		} else {
			this.statusMessage = 'Зробіть ставку'
		}

		this.statusType = 'info'
		this.gameState = 'betting'
		return true
	}
}
