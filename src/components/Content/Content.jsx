import React from "react";
import classes from './Content.module.css'

import { Cards } from './Cards/Cards'

export const Content = (props) => {

    console.log('in Content ', props.questions)

    return (
        <div className={classes.content}>
            <span>Контент</span>
            <Cards questions={props.questions} />
        </div>
    )
}