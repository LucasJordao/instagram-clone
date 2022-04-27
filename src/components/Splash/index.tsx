import style from './splash.module.scss'
import instagramLogo from '../../assets/imgs/instagram-logo.png'
import instagramMeta from '../../assets/imgs/instagram-meta.png'

export default function Splash(){

    return (
        <div className={style.splashScreen}>
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
