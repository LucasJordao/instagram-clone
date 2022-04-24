import { useState } from 'react';
import instagramLogoNome from '../../assets/imgs/instagram-logo-nome.png'
import style from './login.module.scss'
import InputPassword from './InputPasssword';

export default function Login({screenHidden} : {screenHidden: boolean}){

    

    return (
        <div className={style.loginContainer}>
            <form className={`${screenHidden ? style.loginFormVisible : style.loginFormHidden} ${style.loginForm}`}>
                <img width="200px" src={instagramLogoNome} alt="" style={{marginBottom: "20px"}}/>
                <input type="text" placeholder="Phone number, username or email" className={style.loginInput}/>
                <InputPassword />
                <a href="" className={style.loginForgetPassword}>Forget password?</a>
                <input type="submit" value="Log in" className={style.loginSubmit}/>
            </form>
        </div>
    )
}