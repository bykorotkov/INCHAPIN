import React from "react"
import classes from "./MainPage.module.scss"
import Intro from "@/components/pages/MainPage/Intro/Intro"
import About from "@/components/pages/MainPage/About/About"
import Products from "@/components/pages/MainPage/Products/Products"

const MainPage = () => {
    return (
        <div className={classes.Main}>
            <Intro />
            <About />
            <Products />
        </div>
    )
}

export default MainPage
