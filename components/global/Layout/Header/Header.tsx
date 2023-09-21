'use client'

import React from "react"
import classes from './Header.module.scss'
import Image from "next/image"
import headerLogo from '@/images/header/headerLogo.svg'
import Link from "next/link"
import Select from "@/components/ui/Select/Select"
import Container from "@/components/ui/Container/Container"

const Header = () => {
    return (
        <div>
            <Container>
                <div className={classes.Header}>

                    <div className={classes.Left}>
                        <div className={classes.Burger}>Меню</div>
                        <Select />
                    </div>

                    <Link href={'/'} className={classes.Logo}>
                        <Image src={headerLogo} alt="" />
                    </Link>

                    <div className={classes.Right}>
                        <a href="tel:+74955272121">+7 495 527 21 21</a>
                        <a href="#">ЗАКАЗАТЬ ЗВОНОК</a>
                    </div>
                </div>
            </Container>
        </div>


    )
}

export default Header