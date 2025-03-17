import React from 'react'

const CardComponent = ({ card }) => {
	if (card.hidden) {
		return (
			<div className='w-24 h-36 border-6 border-white bg-red-500 rounded-lg shadow-md m-1 transform hover:translate-y-1 transition-transform duration-200'></div>
		)
	}

	const cardColor = card.color === 'red' ? 'text-red-600' : 'text-black'

	return (
		<div className='w-24 h-36 bg-white rounded-lg shadow-md m-1 p-2 flex flex-col justify-between transform hover:translate-y-1 transition-transform duration-200'>
			<div className={`text-xl font-bold ${cardColor}`}>{card.value}</div>
			<div className={`text-4xl text-center ${cardColor}`}>
				{card.suitSymbol}
			</div>
			<div className={`text-xl font-bold self-end ${cardColor}`}>
				{card.value}
			</div>
		</div>
	)
}

export default CardComponent
