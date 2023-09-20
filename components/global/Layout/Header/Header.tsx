'use client'

import React from "react"
import classes from './Header.module.scss'
import Select from 'react-select'
import Image from "next/image"
import headerLogo from '@/images/header/headerLogo.svg'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.Left}>
                <div className={classes.Burger}></div>
                <Select options={options} />
            </div>

            <div className={classes.Logo}>
                <Image src={headerLogo} alt="" />
            </div>
            <div className={classes.Right}>
                <a href="tel:+74955272121">+7 495 527 21 21</a>
                <a href="#">ЗАКАЗАТЬ ЗВОНОК</a>
            </div>
        </div>
    )
}

export default Header