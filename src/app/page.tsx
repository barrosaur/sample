'use client'
import './page.css'
import { LoginForm, HomeMsg, SignupForm } from '@/components/components'
import React, { useState } from 'react';

export default function Home() {
  const msgLogin = "Welcome back to Sample! Try to share something today or read\
  something fun or informative. Make learning fun!";
  const msgSignup = "Welcome to Sample! This is a blog post website where you can\
  share your ideas, read other people's ideas, and try them. Just an important rule\
  when you join, make learning fun";
  const headingLogin = "Welcome Back!";
  const headingSignup = "Hello, there!"

  const [isSignUp, setIsSignUp] = useState(0)
  const midToggleContainer1 = isSignUp ? "mid-msg-container" : "mid-form-container"
  const midToggleContainer2 = isSignUp ? "mid-form-container" : "mid-msg-container"

  return(
    <>
      <div className="home">
        <div className="h-3/5 w-4/6 rounded-3xl mid-container">
          <div className={`${midToggleContainer1} h-full w-3/6 rounded-3xl flex justify-center items-center`}>
            <LoginForm setIsSignUp={setIsSignUp}/>
          </div>
          <div className={`${midToggleContainer2} h-full w-3/6 rounded-3xl justify-end flex items-center`}>
            <HomeMsg
              heading={isSignUp ? headingSignup : headingLogin}
              message={isSignUp ? msgSignup : msgLogin}
            />
          </div>
        </div>
      </div>
    </>
  );
}