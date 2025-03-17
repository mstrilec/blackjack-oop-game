import React, { useState } from 'react'

const GameControls = ({
	gameState,
	onPlaceBet,
	onHit,
	onStand,
	onNewGame,
	maxBet,
}) => {
	const [betAmount, setBetAmount] = useState(50)

	const handleBetChange = e => {
		const value = parseInt(e.target.value)
		setBetAmount(value > maxBet ? maxBet : value)
	}

	const handlePlaceBet = () => {
		onPlaceBet(betAmount)
	}

	return (
		<div className='flex flex-col items-center mt-4'>
			{gameState === 'betting' && (
				<div className='flex items-center mb-4'>
					<span className='mr-2'>Ставка:</span>
					<input
						type='number'
						value={betAmount}
						onChange={handleBetChange}
						min={10}
						max={maxBet}
						step={10}
						className='p-2 w-24 rounded border text-center'
					/>
					<button
						onClick={handlePlaceBet}
						className='ml-2 bg-yellow-500 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors'
					>
						Поставити
					</button>
				</div>
			)}

			{gameState === 'playing' && (
				<div className='flex justify-center gap-4'>
					<button
						onClick={onHit}
						className='bg-green-600 text-white px-4 py-2 rounded font-bold hover:bg-green-500 transition-colors'
					>
						Ще карту
					</button>
					<button
						onClick={onStand}
						className='bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-500 transition-colors'
					>
						Достатньо
					</button>
				</div>
			)}

			{gameState === 'gameOver' && (
				<button
					onClick={onNewGame}
					className='bg-yellow-500 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors'
				>
					Нова гра
				</button>
			)}
		</div>
	)
}

export default GameControls
