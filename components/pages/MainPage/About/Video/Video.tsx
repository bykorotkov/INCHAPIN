import React, { useEffect, useRef, useState } from "react"
import classes from "./Video.module.scss"
import { useAppDispatch } from "@/hooks/redux"
import { openModal } from "@/store/reducers/modalSlice"
import useWindowSize from "@/hooks/useWindowSize"
import { is } from "immutable"

const Video = () => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { width } = useWindowSize()
    const videoRef = useRef<HTMLVideoElement>(null)

    const openVideo = () => {
        setIsOpen(true)

        const videoElement = document.getElementById("mobileVideo") as any
        if (videoElement) {
            videoElement.style.display = "block"
        }
    }

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play()
            videoRef.current.volume = 0.1
        }
    }, [isOpen])

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
            <video
                controls
                id={"mobileVideo"}
                className={classes.mobileVideo}
                onLoadedMetadata={handleVideoLoadedMetadata}
                onChange={openVideo}
                ref={videoRef}
            >
                <source
                    src="/video.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default Video
