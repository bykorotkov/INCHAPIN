import React from "react"
import classes from './NotFoundPage.module.scss'
import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.Head}>Ой, этой страницы не существует...</div>
            <div className={classes.Subhead}>Вы можете нажать на кнопку ниже и вернуться.</div>
            <Link href={'/'}>Вернуться на главную</Link>
        </div>
    )
}

export default NotFoundPage