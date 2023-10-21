import React from "react"
import classes from "./Banner.module.scss"
import Image from "next/image"
import banner from "@/images/MainPage/ban1440.jpg"
import bannerTablet from "@/images/MainPage/ban1024.jpg"
import bannerMobile from "@/images/MainPage/ban768.jpg"
import { onSizeBreakpoint } from "@/utils/onSizeBreakpoint"
import useWindowSize from "@/hooks/useWindowSize"

const image = {
    1440: banner,
    768: bannerTablet,
    360: bannerMobile
}

const Banner = () => {
    const { width } = useWindowSize()
    const breakpoint = onSizeBreakpoint()
    return (
        <div className={classes.Banner}>
            <Image
                src={image[breakpoint]}
                alt=""
            />
        </div>
    )
}

export default Banner
