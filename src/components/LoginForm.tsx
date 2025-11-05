'use client'
import React, { useState } from 'react'
import '@/styles/form.css'

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full">
      <h1 className="text-3xl text-center font-bold">Login</h1>
      <form className='flex flex-col gap-5 w-full form' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className='font-bold'>Enter Email</label>
          <input 
            type="email" 
            placeholder='johndoe@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='text-sm input'  
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className='font-bold'>Enter Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required  
            className='text-sm input'
          />
        </div>
        <div className="flex justify-center items-center btn-container">
          <button type="submit" className="cursor-pointer button">
            <h3>Login</h3>
          </button>
        </div>
      </form>
      <p className='p-login'>Don't have an account? <span className='underline cursor-pointer span-login'>Signup Here</span></p>
    </div>
  )
}

export default LoginForm