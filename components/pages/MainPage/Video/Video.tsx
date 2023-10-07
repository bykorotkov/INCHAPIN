import React, { useState } from "react"
import classes from "./Video.module.scss"
import { useAppDispatch } from "@/hooks/redux"
import { openModal } from "@/store/reducers/modalSlice"

const Video = () => {
    const dispatch = useAppDispatch()

    // const handleButtonClick = () => {
    //     setShowVideo(true)
    // }

    return (
        <div className={classes.VideoBlock}>
            <div className={classes.Text}>
                <p>ВИДЕО о ПРОЕКТЕ</p>
                <span>1:25 минут</span>
            </div>
            <button
                // onClick={handleButtonClick}
                onClick={() => dispatch(openModal("VideoForm"))}
                className={classes.Video}
            >
                <div className={classes.Effect}></div>
            </button>
            {/*{showVideo && (*/}
            {/*    <video id='Video-player' controls onLoadedMetadata={handleVideoLoadedMetadata}>*/}
            {/*        <source src="/video.mp4" type="video/mp4" />*/}
            {/*    </video>*/}
            {/*)}*/}
        </div>
    )
}

export default Video
