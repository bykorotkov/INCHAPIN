import React, { useEffect } from "react"
import classes from "./About.module.scss"
import ParallaxItem from "@/components/pages/MainPage/About/ParallaxItem/ParallaxItem"
import Video from "@/components/pages/MainPage/About/Video/Video"
if (window.Telegram) {
    const tg = window.Telegram.WebApp
}

const About = () => {
    return (
        <section className={classes.About}>
            <div className={classes.Left}>
                <div className={classes.AboutText}>о проекте</div>
                <ParallaxItem />
            </div>
            <div className={classes.Right}>
                <div className={classes.DecorRow}></div>
                <div className={classes.TextHead}>
                    уютное и безопасное пространство для счастливой, <span>спокойной и размеренной жизни</span>
                </div>
                <div className={classes.TextBody}>
                    <span>
                        Квартиры от 65 до 356 м<sup>2</sup> с чистовой отделкой,
                    </span>{" "}
                    балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.
                </div>
                <Video />
            </div>
        </section>
    )
}

export default About
