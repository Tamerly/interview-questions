import React from 'react'
import classes from './CardElement.module.css'

export const CardElement = (props) => {
    return(
        <div className={classes.card_element}>
            <img className={classes.card_image} src={props.image} alt='JS logo'/>
            <div className={classes.card_description}>
                {props.question}
            </div>
            
        </div>
    )
}