import React, { useEffect } from "react"
import Modal from "@/components/global/Modal/Modal"
import classes from "./VideoForm.module.scss"
import { closeModal } from "@/store/reducers/modalSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import CloseIconWhite from "@/components/icons/closeIconWhite"

const VideoForm = () => {
    const dispatch = useAppDispatch()
    const handleVideoLoadedMetadata = () => {
        const videoElement = document.getElementById("VideoContainer")
        if (videoElement && videoElement) {
            videoElement.requestFullscreen()
            videoElement.addEventListener("fullscreenchange", handleFullscreenChange)
        }
    }

    const handleFullscreenChange = () => {
        const videoElement = document.getElementById("VideoContainer") as HTMLVideoElement
        const video = document.getElementById("Video-player") as HTMLVideoElement
        if (videoElement && document.fullscreenElement === videoElement) {
            video.volume = 0.2
            video.play()
        } else {
            handleClose()
        }
    }

    const handleClose = () => {
        dispatch(closeModal())
    }

    return (
        <Modal>
            <div
                id="VideoContainer"
                className={classes.VideoContainer}
            >
                <div
                    className={classes.closeIcon}
                    onClick={handleClose}
                >
                    <CloseIconWhite />
                </div>
                <video
                    id="Video-player"
                    controls
                    onLoadedMetadata={handleVideoLoadedMetadata}
                    className={classes.Video}
                >
                    <source
                        src="/video.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </Modal>
    )
}

export default VideoForm
