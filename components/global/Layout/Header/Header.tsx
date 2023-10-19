"use client"
import React from "react"
import classes from "./Header.module.scss"
import Image from "next/image"
import headerLogo from "@/images/header/headerLogo.svg"
import Link from "next/link"
import Select from "@/components/ui/Select/Select"
import Container from "@/components/ui/Container/Container"
import { openModal } from "@/store/reducers/modalSlice"
import { useAppDispatch } from "@/hooks/redux"
import PhoneIcon from "@/images/header/phoneIcon.svg"

const Header = () => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <div className={classes.Header}>
                <div className={classes.Left}>
                    <div className={classes.BurgerContainer}>
                        <div className={classes.BurgerItems}>
                            <div className={classes.Line}></div>
                            <div className={classes.Line}></div>
                            <div className={classes.Line}></div>
                        </div>
                        <div className={classes.Burger}>Меню</div>
                    </div>
                    <div className={classes.DesktopSelect}>
                        <Select />
                    </div>
                </div>

                <div
                    className={classes.TabletPhone}
                    onClick={() => dispatch(openModal("CallbackForm"))}
                >
                    <Image
                        src={PhoneIcon}
                        alt={""}
                    />
                </div>

                <Link
                    href={"/"}
                    className={classes.Logo}
                >
                    <Image
                        src={headerLogo}
                        alt=""
                    />
                    <Image
                        src={headerLogo}
                        alt=""
                    />
                </Link>

                <div className={classes.Right}>
                    <div className={classes.Link}>
                        <a href="tel:+74955272121">+7 495 527 21 21</a>
                        <a href="tel:+74955272121">+7 495 527 21 21</a>
                    </div>

                    <div
                        className={classes.Link}
                        onClick={() => dispatch(openModal("CallbackForm"))}
                    >
                        <span>ЗАКАЗАТЬ ЗВОНОК</span>
                        <span>ЗАКАЗАТЬ ЗВОНОК</span>
                    </div>
                </div>

                <div className={classes.TabletSelect}>
                    <Select />
                </div>

                <div
                    className={classes.MobilePhone}
                    onClick={() => dispatch(openModal("CallbackForm"))}
                >
                    <Image
                        src={PhoneIcon}
                        alt={""}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
