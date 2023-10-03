'use client'
import React, { useEffect, useState } from "react"
import classes from './MainPage.module.scss'
import Image from "next/image"
import banner from '@/images/MainPage/ban1440.jpg'
import Video from "@/components/pages/MainPage/Video/Video"
import ParallaxItem from "@/components/pages/MainPage/ParallaxItem/ParallaxItem"
import inchapLogo from '@/images/MainPage/inchapLogo.svg'

const MainPage = () => {

    return (
        <div className={classes.Main}>
            <div className={classes.Banner}>
                <Image src={banner} alt='' />
            </div>
            <div className={classes.Top}>
                <div className={classes.LeftText}>
                    <span>Дом бизнес-класса</span>
                    <br />
                    <span>для ценителей роскоши</span>
                </div>

                <div className={classes.InchapLogo}>
                    <Image src={inchapLogo} alt='' />
                </div>
            </div>
            <div className={classes.Bottom}>
                <div className={classes.Left}>
                    <div className={classes.About}>о проекте</div>
                    <ParallaxItem />
                </div>
                <div className={classes.Right}>
                    <div className={classes.DecorRow}></div>
                    <div className={classes.TextHead}>уютное и безопасное пространство для счастливой, <span>спокойной и размеренной жизни</span></div>
                    <div className={classes.TextBody}><span>Квартиры от 65 до 356 м2 с чистовой отделкой,</span> балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.</div>
                   <Video />
                </div>
            </div>
        </div>
    )
}

export default MainPage