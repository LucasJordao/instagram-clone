import style from './splash.module.scss'
import instagramLogo from '../../assets/imgs/instagram-logo.png'
import instagramMeta from '../../assets/imgs/instagram-meta.png'
import { useState } from 'react'

export default function Splash({screenHidden = false} : {screenHidden: boolean}){

    return (
        <div className={style.splashScreen} style={{display: screenHidden ? "none": "block"}}>
            <div className={style.logoInstagram}>
                <img width="90px" src={instagramLogo} alt="" />
            </div>
            <div className={style.logoMeta}>
                <p>from</p>
                <img style={{bottom: "70px", position: "fixed"}} width="150px"  src={instagramMeta} alt="" />
            </div>
        </div>
    )
}
