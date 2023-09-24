import React from "react"
import classes from './MainPage.module.scss'
import Image from "next/image"
import banner from '@/images/MainPage/ban1440.jpg'
import aboutBanner from '@/images/MainPage/AboutBanner1440.jpg'

const MainPage = () => {
    return (
        <div className={classes.Main}>
            <div className={classes.Banner}>
                <Image src={banner} alt='' />
            </div>
            <div className={classes.Top}>
                <div className={classes.LeftText}>
                    <span>Дом бизнес-класса</span>
                    <br />
                    <span>для ценителей роскоши</span>
                </div>

                <div className={classes.RightText}>
                    INCHAPIN
                </div>
            </div>
            <div className={classes.Bottom}>
                <div className={classes.Left}>
                    <div className={classes.About}>о проекте</div>
                    <div className={classes.BannerBottom}>
                        <Image src={aboutBanner} alt='' />
                        <div className={classes.ImageDecor}>
                            <svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.6105 0C48.3461 0 49 0.623853 49 1.32569V7.17431C49 7.87615 48.3461 8.5 47.6105 8.5H1.38949C0.653876 8.5 2.74191e-09 7.87615 2.74191e-09 7.17431V1.32569C2.74191e-09 0.623853 0.653876 0 1.38949 0H47.6105Z" fill="white"/>
                                <path d="M26.2888 18.5551C26.0855 18.1248 25.7603 17.7727 25.0285 17.7727H24.2967C23.6463 17.7727 23.2804 18.1248 23.0364 18.5551L0.147809 66.1615C-0.299393 67.1003 0.31043 68 1.40811 68H7.79091C8.96989 68 9.62036 67.2959 9.90495 66.5918L24.3374 35.5322H24.5407L39.0951 66.5918C39.6236 67.5697 40.1114 68 41.2091 68H47.5919C48.6896 68 49.2994 67.0612 48.8522 66.1615L26.2888 18.5551Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={classes.Right}>
                    <div className={classes.DecorRow}></div>
                    <div className={classes.TextHead}>уютное и безопасное пространство для счастливой, <span>спокойной и размеренной жизни</span></div>
                    <div className={classes.TextBody}><span>Квартиры от 65 до 356 м2 с чистовой отделкой,</span> балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.</div>
                </div>
            </div>
        </div>
    )
}

export default MainPage