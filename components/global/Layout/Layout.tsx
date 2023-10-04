'use client'
import React, { useEffect, useRef } from "react"
import classes from './Layout.module.scss'
import Header from "@/components/global/Layout/Header/Header"
import Scrollbar from "smooth-scrollbar"
import { setScroll } from "@/store/reducers/scrollSlice";
import { useAppDispatch } from "@/hooks/redux"
import FixedHeader from "@/components/global/Layout/FixedHeader/FixedHeader"

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
    const dispatch = useAppDispatch();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollbar = Scrollbar.init(containerRef.current as HTMLDivElement, {
            damping: 0.1,
            thumbMinSize: 20,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true,
        });

        scrollbar.addListener((status) => {
            dispatch(setScroll(status.offset.y));
        });

        return () => {
            scrollbar.destroy();
        };
    }, [dispatch]);

    return (
        <div>
            <FixedHeader />
            <div className={classes.Layout} ref={containerRef} style={{position: "fixed"}}>
                <Header />
                {children}
            </div>

        </div>

    )
}

export default Layout