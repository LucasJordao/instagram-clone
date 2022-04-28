import React, { useEffect, useState } from 'react';
import Splash from '../../components/Splash'
import LoginForm from '../../components/LoginForm'
import { getCookie } from '../../common/utils/cookieJs';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../../common/utils/tokenUtil';

function Login() {

    const token = getCookie("token")
    const [loginForm, setLoginForm] = useState(true)
    const [splashHidden, setSplashHidden] = useState<boolean>(true)
    const navigate = useNavigate()
    useEffect(() => {
      if(token !== undefined && token !== "" && verifyToken(token)){
        setLoginForm(false)
      }
      setSplashHidden(false)
    })

  return (
    <>
      {loginForm ? splashHidden ? <Splash/> : <LoginForm screenHidden={splashHidden}/> : navigate(-1)} 
    </>
  );
}

export default Login;
