'use client'
import './page.css'
import { LoginForm, HomeMsg, SignupForm } from '@/components/components'
import React, { useState } from 'react';

export default function Login() {
  const msgLogin = "Welcome back to Sample! Try to share something today or read\
  something fun or informative. Make learning fun!";
  const msgSignup = "Welcome to Sample! This is a blog post website where you can\
  share your ideas, read other people's ideas, and try them. Just an important rule\
  when you join, make learning fun";
  const headingLogin = "Welcome Back!";
  const headingSignup = "Hello, there!"

  const [isSignUp, setIsSignUp] = useState(false)

  return(
    <>
      <div className="home">
        <div className="h-3/5 w-4/6 rounded-3xl mid-container overflow-hidden relative">
          <div 
            className={`mid-form-container h-full w-3/6 rounded-3xl flex 
              justify-center items-center absolute top-0 transition-transform duration-700 ease-in-out 
              ${isSignUp ? 'translate-x-full' : 'translate-x-0'}`}
            style={{ left : 0}}
          >
            <div 
              className={`w-full transition-opacity duration-300 
              ${isSignUp ? 'opacity-0 pointer-events-none': 'opacity-100'}`}>
              <LoginForm setIsSignUp={setIsSignUp}/>
            </div>
            <div className={`w-full absolute transition-opacity duration-300 
              ${isSignUp ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <SignupForm setIsSignup={setIsSignUp} />
            </div>
          </div>

          <div 
            className={`mid-msg-container h-full w-3/6 rounded-3xl flex items-center absolute top-0 transition-transform duration-700 ease-in-out ${
            isSignUp ? '-translate-x-full' : 'translate-x-0'}`}
            style={{ right: 0 }}
          >
            <div className={`w-full transition-opacity duration-300 ${isSignUp ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <HomeMsg 
                heading={headingLogin}
                message={msgLogin}
              />
            </div>
            <div className={`w-full absolute transition-opacity duration-300 ${isSignUp ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <HomeMsg
                heading={headingSignup}
                message={msgSignup}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

