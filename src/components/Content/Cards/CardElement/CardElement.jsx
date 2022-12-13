import React from 'react'
import classes from './CardElement.module.css'

export const CardElement = (props) => {
    return(
        <div className={classes.card_element}>
            {props.question}
        </div>
    )
}