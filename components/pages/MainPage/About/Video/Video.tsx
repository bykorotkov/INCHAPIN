import React, { useState } from "react"
import classes from "./Video.module.scss"
import { useAppDispatch } from "@/hooks/redux"
import { openModal } from "@/store/reducers/modalSlice"
import useWindowSize from "@/hooks/useWindowSize"

const Video = () => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState()
    const { width } = useWindowSize()

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
            {isOpen && (
                <video
                    controls
                    id={"mobileVideo"}
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
