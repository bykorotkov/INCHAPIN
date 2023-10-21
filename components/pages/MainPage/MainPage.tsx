import React from "react"
import classes from "./MainPage.module.scss"
import Intro from "@/components/pages/MainPage/Intro/Intro"
import About from "@/components/pages/MainPage/About/About"

const MainPage = () => {
    return (
        <div className={classes.Main}>
            <Intro />
            <About />
        </div>
    )
}

export default MainPage
