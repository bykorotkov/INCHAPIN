import React from "react"
import classes from "./Intro.module.scss"
import Banner from "@/components/pages/MainPage/Intro/Banner/Banner"
import Image from "next/image"
import inchapLogo from "@/images/MainPage/inchapLogo.svg"

const Intro = () => {
    return (
        <section className={classes.Intro}>
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
        </section>
    )
}

export default Intro
