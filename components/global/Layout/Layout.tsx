"use client"
import React, { useEffect, useRef } from "react"
import classes from "./Layout.module.scss"
import Header from "@/components/global/Header/Header"
import Scrollbar from "smooth-scrollbar"
import { setScroll } from "@/store/reducers/scrollSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import FixedHeader from "@/components/global/FixedHeader/FixedHeader"
import CallbackForm from "@/components/popup/CallbackForm/CallbackForm"
import { CSSTransition } from "react-transition-group"
import VideoForm from "@/components/popup/VideoForm/VideoForm"

type LayoutType = {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutType) => {
    const dispatch = useAppDispatch()
    const containerRef = useRef<HTMLDivElement>(null)
    const { name } = useAppSelector((state) => state.modalReducer)

    useEffect(() => {
        const scrollbar = Scrollbar.init(containerRef.current as HTMLDivElement, {
            damping: 0.1,
            thumbMinSize: 20,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true
        })

        scrollbar.addListener((status) => {
            dispatch(setScroll(status.offset.y))
        })

        return () => {
            scrollbar.destroy()
        }
    }, [dispatch])

    return (
        <>
            <FixedHeader />
            <div
                className={classes.Layout}
                ref={containerRef}
                style={{ position: "fixed" }}
            >
                <Header />
                {children}
            </div>
            <CSSTransition
                in={name === "CallbackForm"}
                timeout={200}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {() => <CallbackForm />}
            </CSSTransition>
            <CSSTransition
                in={name === "VideoForm"}
                timeout={0}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {() => <VideoForm />}
            </CSSTransition>
        </>
    )
}

export default Layout
