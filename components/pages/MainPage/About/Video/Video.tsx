import React, { useEffect, useState } from "react"
import classes from "./Video.module.scss"
import { useAppDispatch } from "@/hooks/redux"
import { openModal } from "@/store/reducers/modalSlice"
import useWindowSize from "@/hooks/useWindowSize"

const Video = () => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const { width } = useWindowSize()

    const openVideo = () => {
        setIsOpen(true)
    }

    const closeVideo = () => {
        setIsOpen(false)
    }
    const handleVideoLoadedMetadata = () => {
        const videoElement = document.getElementById("VideoContainer") as any
        if (videoElement) {
            videoElement.requestFullscreen()
            videoElement.webkitEnterFullscreen()
            videoElement.addEventListener("fullscreenchange", handleFullscreenChange)
        }
    }

    const handleFullscreenChange = () => {
        const videoElement = document.getElementById("VideoContainer") as HTMLVideoElement
        if (videoElement && document.fullscreenElement !== videoElement) {
            closeVideo()
        }
    }

    return (
        <div className={classes.VideoBlock}>
            <div className={classes.Text}>
                <p>ВИДЕО о ПРОЕКТЕ</p>
                <span>1:25 минут</span>
            </div>
            <button
                onClick={width > 768 ? () => dispatch(openModal("VideoForm")) : openVideo}
                className={classes.Video}
            >
                <div className={classes.Effect}></div>
            </button>
            {isOpen && (
                <div id="VideoContainer">
                    <video
                        controls
                        id={"mobileVideo"}
                        className={classes.mobileVideo}
                        onLoadedMetadata={handleVideoLoadedMetadata}
                    >
                        <source
                            src="/video.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            )}
        </div>
    )
}

export default Video
