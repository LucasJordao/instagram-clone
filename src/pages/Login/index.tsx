import React, { useEffect, useState } from 'react';
import Splash from '../../components/Splash'
import LoginForm from '../../components/LoginForm'

function Login() {

    const [splashHidden, setSplashHidden] = useState<boolean>(true)

    useEffect(() => {
      setSplashHidden(false)
    })

  return (
    <>
      {splashHidden ? <Splash/> : <LoginForm screenHidden={splashHidden}/>} 
    </>
  );
}

export default Login;
