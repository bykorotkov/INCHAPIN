import React, { useState } from "react"
import classes from "./Video.module.scss"
import { useAppDispatch } from "@/hooks/redux"
import { openModal } from "@/store/reducers/modalSlice"
import useWindowSize from "@/hooks/useWindowSize"

const Video = () => {
    const dispatch = useAppDispatch()
    // const [showVideo, setShowVideo] = useState(false)
    // const { width } = useWindowSize()

    // const handleVideoLoadedMetadata = () => {
    //     const videoElement = document.getElementById("Video-player")
    //     if (videoElement) {
    //         videoElement.requestFullscreen()
    //         videoElement.addEventListener("fullscreenchange", handleFullscreenChange)
    //     }
    // }
    //
    // const handleFullscreenChange = () => {
    //     const video = document.getElementById("Video-player") as HTMLVideoElement
    //     if (
    //         video
    //         // && document.fullscreenElement === video
    //     ) {
    //         video.volume = 0
    //         video.play()
    //     } else {
    //         setShowVideo(false)
    //     }
    // }
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
                onClick={() => dispatch(openModal("VideoForm"))}
                className={classes.Video}
            >
                <div className={classes.Effect}></div>
            </button>

            {/*{showVideo && (*/}
            {/*    <video*/}
            {/*        id="Video-player"*/}
            {/*        controls*/}
            {/*        // onLoadedMetadata={handleVideoLoadedMetadata}*/}
            {/*    >*/}
            {/*        <source*/}
            {/*            src="/video.mp4"*/}
            {/*            type="video/mp4"*/}
            {/*        />*/}
            {/*    </video>*/}
            {/*)}*/}
        </div>
    )
}

export default Video
