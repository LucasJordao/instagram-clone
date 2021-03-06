import React, { useEffect, useState } from 'react';
import instagramLogoNome from '../../assets/imgs/instagram-logo-nome.png'
import style from './login.module.scss'
import InputPassword from '../InputPasssword';
import InputInstagram from '../InputInstagram';
import LoginFooter from '../LoginFooter';
import { setCookie } from '../../common/utils/cookieJs'
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

export default function Login({ screenHidden }: { screenHidden: boolean }) {

    const disabledNoIconLoad = { disabled: true, loadIcon: "none" }
    const disabledWithIconLoad = { disabled: true, loadIcon: "load" }
    const notDisabled = { disabled: false, loadIcon: "none" }

    const navigate = useNavigate()

    // States
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: "",
        loginFailed: false
    })

    const [submitDisabled, setSubmitDisabled] = useState({
        disabled: true,
        loadIcon: "none"
    })

    // UseEffects
    useEffect(() => {
        changeSubmitByInput()
    }, [loginFormData.username, loginFormData.password])


    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if ((event.code === "Enter" || event.code === "NumpadEnter") && submitDisabled === notDisabled) {
              event.preventDefault();
              sendLogin()
            }
          };
          document.addEventListener("keydown", listener);
    }, [])

    // Functions aux
    function sendFormLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        sendLogin()
    }

    function sendLogin(){
        const { username, password } = loginFormData
        setSubmitDisabled(disabledWithIconLoad);
        api.post("/instagram/login", { username, password })
            .then(resposta => {
                setSubmitDisabled(notDisabled);
                setCookie("token", resposta.data, 1)
                navigate("/")
            }).catch(() => {
                setSubmitDisabled(notDisabled);
                setLoginFormData({ ...loginFormData, loginFailed: true })
            })
    }

    function changeSubmitByInput() {
        setLoginFormData({ ...loginFormData, loginFailed: false })
        if (loginFormData.username.length > 3 && loginFormData.password.length > 3) {
            setSubmitDisabled(notDisabled);
        } else {
            setSubmitDisabled(disabledNoIconLoad);
        }
    }

    return (
        <div className={style.loginContainer}>
                <form
                    className={`${screenHidden ? style.loginFormVisible : style.loginFormHidden} ${style.loginForm}`}
                    onSubmit={event => sendFormLogin(event)}
                >
                    <img width="200px" src={instagramLogoNome} alt="" style={{ marginBottom: "20px" }} />

                    <InputInstagram onChange={event => setLoginFormData({ ...loginFormData, username: event.target.value })} value={loginFormData.username} placeholder="Phone number, username or email" />
                    <InputPassword onChange={event => setLoginFormData({ ...loginFormData, password: event.target.value })} value={loginFormData.password} />

                    <a href="" className={style.loginForgetPassword}>Forget password?</a>
                    <button type="submit" disabled={submitDisabled.disabled} className={style.loginSubmit}>
                        {submitDisabled.loadIcon === "load" ?
                            <svg className={style.spinnerLoad} xmlns="http://www.w3.org/2000/svg" width="12px" fill="white" viewBox="0 0 512 512"><path d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z" /></svg>
                            :
                            "Log in"
                        }
                    </button>
                    {loginFormData.loginFailed ? <div className={style.loginFailed}> Login failed </div> : ""}
                </form>
                <LoginFooter to="/register" textLink='Sign Up.' textSpan="Don't have an account?" />
            </div>   
    )
}