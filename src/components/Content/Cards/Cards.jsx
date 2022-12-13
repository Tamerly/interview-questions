import React from 'react'
import classes from './Cards.module.css'

import { CardElement } from './CardElement/CardElement'

export const Cards = (props) => {
	console.log('in Cards', props.questions)

	let cardElements = props.questions.map(
		card => <CardElement question={card.question} />
	)

	return (
		<div className={classes.cards}>
			<h3>Карточки</h3>
			{cardElements}

		</div>
	)
}
