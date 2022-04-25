import React, { useState } from 'react';
import Splash from '../../components/Splash'
import LoginForm from '../../components/LoginForm'

function Login() {

    const [splashHidden, setSplashHidden] = useState<boolean>(false)

    setTimeout( 
        () => {
            setSplashHidden(true)
        }
    , 3500);

  return (
    <>
        <Splash screenHidden={splashHidden}/>
        <LoginForm screenHidden={splashHidden}/>
    </>
  );
}

export default Login;
