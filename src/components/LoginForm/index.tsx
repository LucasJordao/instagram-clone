import React, { useState } from 'react';
import instagramLogoNome from '../../assets/imgs/instagram-logo-nome.png'
import style from './login.module.scss'
import InputPassword from '../InputPasssword';
import SignUpFooter from './SignUpFooter';
import InputInstagram from '../InputInstagram';

export default function Login({screenHidden} : {screenHidden: boolean}){

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    function sendLogin(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("Enviando:", password)
        console.log("username:", username)
    }

    function changePassword(event: React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function changeUsername(event: React.ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }

    return (
        <div className={style.loginContainer}>
            <form 
                className={`${screenHidden ? style.loginFormVisible : style.loginFormHidden} ${style.loginForm}`} 
                onSubmit={event => sendLogin(event)}
            >
                <img width="200px" src={instagramLogoNome} alt="" style={{marginBottom: "20px"}}/>

                <InputInstagram onChange={event => changeUsername(event)} value={username} placeholder="Phone number, username or email"/>
                <InputPassword onChange={event => changePassword(event)} value={password}/>

                <a href="" className={style.loginForgetPassword}>Forget password?</a>
                <input type="submit" value="Log in" disabled={!(password.length > 5)} className={style.loginSubmit}/>
            </form>
            <SignUpFooter />
        </div>
    )
}