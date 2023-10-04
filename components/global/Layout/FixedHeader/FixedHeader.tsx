import React, { useEffect, useState } from "react"
import Container from "@/components/ui/Container/Container"
import classes from "./FixedHeader.module.scss"
import Select from "@/components/ui/Select/Select"
import Link from "next/link"
import Image from "next/image"
import headerLogo from "@/images/header/headerLogo.svg"
import classNames from "classnames"
import { useAppSelector } from "@/hooks/redux"

const FixedHeader = () => {
    const [showFixedHeader, setShowFixedHeader] = useState(false);
    const {scroll} = useAppSelector(state => state.scrollReducer)

    useEffect(() => {
        const handleScroll = () => {
            setShowFixedHeader(scroll > 100); // показывать фиксированный хедер, если страница прокручена более чем на 100 пикселей
        };
        handleScroll()

    }, [scroll]);

    return (
        <div>
            <Container>
                <div className={classNames(classes.Header, { [classes.show]: showFixedHeader })}>
                    <div className={classes.Left}>
                        <div className={classes.BurgerContainer}>
                            <div className={classes.BurgerItems}>
                                <div className={classes.Line}></div>
                                <div className={classes.Line}></div>
                                <div className={classes.Line}></div>
                            </div>
                            <div className={classes.Burger}>Меню</div>
                        </div>
                        <Select />
                    </div>

                    <Link href={'/'} className={classes.Logo}>
                        <Image src={headerLogo} alt="" />
                        <Image src={headerLogo} alt="" />
                    </Link>

                    <div className={classes.Right}>
                        <div className={classes.Link}>
                            <a href="tel:+74955272121">+7 495 527 21 21</a>
                            <a href="tel:+74955272121">+7 495 527 21 21</a>
                        </div>

                        <div className={classes.Link}>
                            <a href="#">ЗАКАЗАТЬ ЗВОНОК</a>
                            <a href="#">ЗАКАЗАТЬ ЗВОНОК</a>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FixedHeader