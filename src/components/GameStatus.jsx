import React from 'react'

const GameStatus = ({ message, type }) => {
	let textColor = 'text-white'

	if (type === 'win') textColor = 'text-green-400'
	else if (type === 'lose') textColor = 'text-red-400'
	else if (type === 'draw') textColor = 'text-yellow-400'

	return (
		<div className={`text-xl font-bold text-center my-4 ${textColor}`}>
			{message}
		</div>
	)
}

export default GameStatus
