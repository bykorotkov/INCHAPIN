import React, { useState } from "react"
import classes from "./Video.module.scss"
import { useAppDispatch } from "@/hooks/redux"
import { openModal } from "@/store/reducers/modalSlice"

const Video = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={classes.VideoBlock}>
            <div className={classes.Text}>
                <p>ВИДЕО о ПРОЕКТЕ</p>
                <span>1:25 минут</span>
            </div>
            <button
                onClick={() => dispatch(openModal("VideoForm"))}
                className={classes.Video}
            >
                <div className={classes.Effect}></div>
            </button>
        </div>
    )
}

export default Video
