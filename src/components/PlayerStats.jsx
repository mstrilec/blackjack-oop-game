import React from 'react'

const PlayerStats = ({ player }) => {
	return (
		<div className='flex justify-between mb-4'>
			<div className='text-xl font-bold'>Рахунок: {player.hand.value}</div>
			<div className='text-xl'>Баланс: ₴{player.balance}</div>
		</div>
	)
}

export default PlayerStats
