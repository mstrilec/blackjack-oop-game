import React from 'react'

const GameStats = ({ wins, losses, draws }) => {
	return (
		<div className='text-center mt-4 text-gray-300'>
			<span className='text-green-300'>Виграші: {wins}</span> |{' '}
			<span className='text-red-300'>Програші: {losses}</span> |{' '}
			<span>Нічиї: {draws}</span>
		</div>
	)
}

export default GameStats
