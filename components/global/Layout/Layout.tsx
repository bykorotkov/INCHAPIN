'use client'
import React, { useEffect, useRef } from "react"
import classes from './Layout.module.scss'
import Header from "@/components/global/Layout/Header/Header"
import Scrollbar from "smooth-scrollbar"
import { ScrollbarOptions } from "smooth-scrollbar/interfaces"

type LayoutType = {
    children: React.ReactNode
}
const Layout = ({children}: LayoutType) => {
    //Подгрузка страницы сверху при обновлении
    // useEffect(() => {
    //     const handleUnload = () => {
    //         window.scrollTo(0, 0);
    //     };
    //
    //     window.addEventListener("beforeunload", handleUnload);
    //
    //     return () => {
    //         window.removeEventListener("beforeunload", handleUnload);
    //     };
    // }, []);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollbar = Scrollbar.init(containerRef.current as HTMLDivElement, {
            damping: 0.1,
            thumbMinSize: 20,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true,
            // wheelEventTarget: document.body,
        });

        return () => {
            scrollbar.destroy();
        };
    }, []);

    return (
        <div className={classes.Layout} ref={containerRef} style={{position: "fixed"}}>
            <Header />
            {children}
        </div>
    )
}

export default Layout