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
            videoElement.currentTime = 0
            videoElement.style.display = "block"
        }

        if (navigator.userAgent.match(/Android/i)) {
            console.log("android")
            if (videoElement) {
                videoElement.requestFullscreen().then(() => videoElement.play())
            }
        }
    }

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play()
        }
    }, [isOpen])

    const closeVideo = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const videoElement = document.getElementById("mobileVideo") as any
        videoElement.addEventListener("webkitendfullscreen", handleFullscreenChange)
        videoElement.addEventListener("fullscreenchange", handleFullscreenChange)
    }, [])

    const handleFullscreenChange = () => {
        const videoElement = document.getElementById("mobileVideo") as any
        if (videoElement && document.fullscreenElement === videoElement) {
            videoElement.currentTime = 0
            videoElement.play()
            videoElement.volume = 0.1
            console.log("entering")
        } else {
            closeVideo()
            videoElement.currentTime = 0
            videoElement.pause()
        }
    }

    return (
        <div className={classes.VideoBlock}>
            <div className={classes.Text}>
                <p>ВИДЕО о ПРОЕКТЕ</p>
                <span>1:25 минут</span>
            </div>
            <button
                onClick={width >= 768 ? () => dispatch(openModal("VideoForm")) : openVideo}
                className={classes.Video}
            >
                <div className={classes.Effect}></div>
            </button>
            <video
                controls
                id={"mobileVideo"}
                className={classes.mobileVideo}
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
