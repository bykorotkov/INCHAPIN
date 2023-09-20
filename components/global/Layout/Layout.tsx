import React from "react"
import classes from './Layout.module.scss'
import Header from "@/components/global/Layout/Header/Header"

type LayoutType = {
    children: React.ReactNode
}
const Layout = ({children}: LayoutType) => {
    return (
        <>
            <Header />
        </>
    )
}

export default Layout