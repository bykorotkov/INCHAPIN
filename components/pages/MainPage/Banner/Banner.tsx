import React from "react"
import classes from "./Banner.module.scss"
import Image from "next/image"
import banner from "@/images/MainPage/ban1440.jpg"
import bannerTablet from "@/images/MainPage/ban1024.jpg"
import bannerMobile from "@/images/MainPage/ban768.jpg"
import useWindowSize from "@/hooks/useWindowSize"

const Banner = () => {
    const { width } = useWindowSize()
    return (
        <div className={classes.Banner}>
            {width > 1024 ? (
                <Image
                    src={banner}
                    alt=""
                />
            ) : (
                  <Image
                      src={bannerTablet}
                      alt=""
                  />
              ) && width < 769 ? (
                <Image
                    src={bannerMobile}
                    alt=""
                />
            ) : (
                <Image
                    src={bannerTablet}
                    alt=""
                />
            )}
        </div>
    )
}

export default Banner
