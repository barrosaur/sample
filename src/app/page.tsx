import './page.css'
import { LoginForm, HomeMsg } from '@/components/components'
import React, { useState } from 'react';

export default function Home() {
  const msgLogin = "Welcome back to sample! Try to share something today or read\
  something fun or informative. Make learning fun!";

  const [isSignUp, setIsSignUp] = useState(0)

  return(
    <>
      <div className="home">
        <div className="h-3/5 w-4/6 rounded-3xl mid-container">
          <div className="mid-left-container h-full w-3/6 rounded-3xl flex justify-center items-center">
            <LoginForm/>
          </div>
          <div className="mid-right-container h-full w-3/6 rounded-3xl justify-end flex items-center">
            <HomeMsg
              heading='Welcome Back!'
              message={msgLogin}
            />
          </div>
        </div>
      </div>
    </>
  );
}