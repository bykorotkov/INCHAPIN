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
        const videoElement = document.getElementById("mobileVideo") as any
        if (videoElement) {
            videoElement.requestFullscreen()
            videoElement.webkitEnterFullscreen()
            videoElement.addEventListener("fullscreenchange", handleFullscreenChange)
        }
    }

    const handleFullscreenChange = () => {
        const videoElement = document.getElementById("mobileVideo") as HTMLVideoElement
        if (videoElement && document.fullscreenElement === videoElement) {
            videoElement.play()
            videoElement.volume = 0.1
        } else {
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
            )}
        </div>
    )
}

export default Video
