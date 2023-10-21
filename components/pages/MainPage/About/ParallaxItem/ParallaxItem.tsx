"use client"
import React, { useEffect, useState } from "react"
import classes from "./ParallaxItem.module.scss"
import Image from "next/image"
import aboutBanner from "@/images/MainPage/AboutBanner1440.jpg"
import { useAppSelector } from "@/hooks/redux"
import Fancybox from "@/plugins/Fancybox"
import ParallaxIcon from "@/components/icons/parallaxIcon"

const ParallaxItem = () => {
    const [translateY, setTranslateY] = useState(0)
    const [translateYIcon, setTranslateYIcon] = useState(0)
    const { scroll } = useAppSelector((state) => state.scrollReducer)

    useEffect(() => {
        const handleScroll = () => {
            const newTranslateY = -scroll * 0.02
            setTranslateY(newTranslateY)
        }

        const handleScrollIcon = () => {
            const newTranslateY = -scroll * 0.12
            setTranslateYIcon(newTranslateY)
        }

        handleScroll()
        handleScrollIcon()
    }, [scroll])

    return (
        <div className={classes.BannerBottom}>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: false
                    }
                }}
            >
                <a
                    data-fancybox="gallery"
                    href="/AboutBanner1440.jpg"
                >
                    <Image
                        src={aboutBanner}
                        alt=""
                        style={{ transform: `translate(0%, calc(0% + ${translateY}px))` }}
                    />
                </a>
            </Fancybox>

            <div
                className={classes.ImageDecor}
                style={{ transform: `translate(0%, calc(50% + ${translateYIcon}px))` }}
            >
                <ParallaxIcon />
            </div>
        </div>
    )
}

export default ParallaxItem
