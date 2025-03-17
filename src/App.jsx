import React, { useState } from 'react'
import GameControls from './components/GameControls'
import GameStats from './components/GameStats'
import GameStatus from './components/GameStatus'
import HandComponent from './components/HandComponent'
import PlayerStats from './components/PlayerStats'
import { BlackjackGame } from './models/BlackjackGame'

const App = () => {
	const [game] = useState(new BlackjackGame())
	const [, setRenderTrigger] = useState(0)

	const forceUpdate = () => {
		setRenderTrigger(prev => prev + 1)
	}

	const handlePlaceBet = amount => {
		game.placeBet(amount)
		forceUpdate()
	}

	const handleHit = () => {
		game.playerHit()
		forceUpdate()
	}

	const handleStand = () => {
		game.playerStand()
		forceUpdate()
	}

	const handleNewGame = () => {
		game.newGame()
		forceUpdate()
	}

	return (
		<div className='min-h-screen bg-green-800 flex justify-center items-center p-4'>
			<div className='w-full max-w-3xl bg-green-700 shadow-2xl rounded-lg p-6'>
				<h1 className='text-3xl font-bold text-center text-white mb-4'>
					Блекджек
				</h1>

				<GameStatus message={game.statusMessage} type={game.statusType} />

				<PlayerStats player={game.player} />

				<div className='bg-green-800 rounded-lg p-4 mb-4'>
					<HandComponent
						title='Карти дилера'
						hand={game.dealer.hand}
						score={game.dealer.hand.value}
						showScore={game.gameState !== 'betting'}
					/>

					<HandComponent
						title='Ваші карти'
						hand={game.player.hand}
						score={game.player.hand.value}
						showScore={game.gameState !== 'betting'}
					/>
				</div>

				<GameControls
					gameState={game.gameState}
					onPlaceBet={handlePlaceBet}
					onHit={handleHit}
					onStand={handleStand}
					onNewGame={handleNewGame}
					maxBet={game.player.balance}
				/>

				<GameStats
					wins={game.player.wins}
					losses={game.player.losses}
					draws={game.player.draws}
				/>
			</div>
		</div>
	)
}

export default App
