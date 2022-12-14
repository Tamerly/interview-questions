import React from 'react'
import classes from './Cards.module.css'

import { CardElement } from './CardElement/CardElement'

export const Cards = (props) => {
	console.log('in Cards', props.questions)
	console.log('in Cards next section', props.questionsJS)

	let cardElements = props.questions.list.map(
		card => <CardElement question={card.question} />
	)

	let cardElementsJS = props.questions.javascript.map(
		card => <CardElement image={card.image} question={card.question} />
	)

	return (
		<div className={classes.cards}>
			<div>
				<h3>JS</h3>
			</div>
			<div className={classes.card_elements}>
				{cardElementsJS}
			</div>
			<div>
				<h3 className={classes.cards_subject}>Карточки</h3>
			</div>
			<div className={classes.card_elements}>
				{cardElements}
			</div>
			
		</div>
	)
}
