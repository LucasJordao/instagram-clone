import React, { useState } from 'react';
import Splash from '../../components/Splash'
import Login from '../../components/Login'

function App() {

    const [splashHidden, setSplashHidden] = useState<boolean>(false)

    setTimeout( 
        () => {
            setSplashHidden(true)
        }
    , 3500);

  return (
    <>
        <Splash screenHidden={splashHidden}/>
        <Login screenHidden={splashHidden}/>
    </>
  );
}

export default App;
