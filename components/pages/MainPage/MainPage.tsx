"use client"
import React from "react"
import classes from "./MainPage.module.scss"
import Image from "next/image"
import Video from "@/components/pages/MainPage/Video/Video"
import ParallaxItem from "@/components/pages/MainPage/ParallaxItem/ParallaxItem"
import inchapLogo from "@/images/MainPage/inchapLogo.svg"
import Banner from "@/components/pages/MainPage/Banner/Banner"

const MainPage = () => {
    return (
        <div className={classes.Main}>
            <Banner />
            <div className={classes.Top}>
                <div className={classes.LeftText}>
                    <span>Дом бизнес-класса</span>
                    <br />
                    <span>для ценителей роскоши</span>
                </div>

                <div className={classes.InchapLogo}>
                    <Image
                        src={inchapLogo}
                        alt=""
                    />
                </div>
            </div>
            <div className={classes.Bottom}>
                <div className={classes.Left}>
                    <div className={classes.About}>о проекте</div>
                    <ParallaxItem />
                </div>
                <div className={classes.Right}>
                    <div className={classes.DecorRow}></div>
                    <div className={classes.TextHead}>
                        уютное и безопасное пространство для счастливой, <span>спокойной и размеренной жизни</span>
                    </div>
                    <div className={classes.TextBody}>
                        <span>Квартиры от 65 до 356 м2 с чистовой отделкой,</span> балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.
                    </div>
                    <Video />
                </div>
            </div>
        </div>
    )
}

export default MainPage
