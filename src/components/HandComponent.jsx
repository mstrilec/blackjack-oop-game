import React from 'react'
import CardComponent from './CardComponent'

const HandComponent = ({ title, hand, score, showScore }) => {
	return (
		<div className='my-4'>
			<div className='text-xl mb-2'>
				{title}{' '}
				{showScore && <span className='text-lg font-normal'>({score})</span>}
			</div>
			<div className='flex flex-wrap justify-center'>
				{hand.cards.map((card, index) => (
					<CardComponent key={index} card={card} />
				))}
			</div>
		</div>
	)
}

export default HandComponent
