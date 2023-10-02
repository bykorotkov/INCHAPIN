import React, { useState } from "react"
import classes from "./Video.module.scss"


const Video = () => {
    const [showVideo, setShowVideo] = useState(false);
    const handleButtonClick = () => {
        setShowVideo(true);
    };

    const handleVideoLoadedMetadata = () => {
        const videoElement = document.getElementById('Video-player');
        if(videoElement) {
            videoElement.requestFullscreen();
            videoElement.addEventListener('fullscreenchange', handleFullscreenChange);
        }
    };

    const handleFullscreenChange = () => {
        const videoElement = document.getElementById('Video-player') as HTMLVideoElement;
        if(videoElement && document.fullscreenElement === videoElement) {
            videoElement.volume = 0.2; // установка громкости на 20%
            videoElement.play();
        } else {
            setShowVideo(false);
        }
    };
    return (
        <div className={classes.VideoBlock}>
            <div className={classes.Text}>
                <p>ВИДЕО о ПРОЕКТЕ</p>
                <span>1:25 минут</span>
            </div>
            <button onClick={handleButtonClick} className={classes.Video}>
                <div className={classes.Effect}></div>
            </button>
            {showVideo && (
                <video id='Video-player' controls onLoadedMetadata={handleVideoLoadedMetadata}>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            )}
        </div>
    )
}

export default Video