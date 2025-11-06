'use client'
import React, { useState } from 'react'

const SignupForm = () => {
  
  const [email, setEmail] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPass, setConfirmPass] = useState<string>("")

  const handleSubmit = () => {
    setEmail("")
    setUsername("")
    setPassword("")
    setConfirmPass("")
  }

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='text-center text-3xl font-bold'>Signup</h1>
      <form onSubmit={handleSubmit} className='flex justify-center flex-col gap-3 w-full form'>
        <div className='flex flex-col justify-center'>
          <label className='font-bold'>Enter email</label>
          <input 
            type="email"
            placeholder='johndoe@gmail.com'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className='border input text-sm'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <label className='font-bold'>Enter username</label>
          <input 
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            className='border input text-sm'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <label className='font-bold'>Enter password</label>
          <input 
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className='border text-sm input'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <label className='font-bold'>Confirm password</label>
          <input 
            type="password"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)} 
            className='border text-sm input'
          />
        </div>
        <div className='flex justify-center'>
          <button type='submit'className='cursor-pointer button' >
            <h3 className='font-bold'>Signup</h3>
          </button>
        </div>
      </form>
      {password !== confirmPass && (
        <p className='text-red-500 p-wrning'>Passwords do not match.</p>
      )}
    </div>
  )
}

export default SignupForm