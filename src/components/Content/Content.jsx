import React from "react";
import classes from './Content.module.css'

import { Cards } from './Cards/Cards'

export const Content = (props) => {

    console.log('in Content ', props.questions.list)

    return(
        <div className={classes.content}>
            <span>Контент</span>
            <Cards questions={props.questions.list} />

        </div>
    )
}