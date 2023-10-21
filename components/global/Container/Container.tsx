
import React, { useEffect, useRef } from "react"
import classes from './Container.module.scss'
import Scrollbar from "smooth-scrollbar";

interface ContainerTypes {
    children: React.ReactNode
}

const Container = ({children}: ContainerTypes) => {

    return (
        <div className={classes.Container} >
            {children}
        </div>
    )
}

export default Container