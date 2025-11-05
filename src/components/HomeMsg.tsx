import React from 'react'
import '@/styles/homemsg.css'

interface HomeMsgProps {
  heading: string;
  message: string;
}

const HomeMsg = ({ message, heading } : HomeMsgProps) => {
  return (
    <div className='w-full flex flex-col justify-center items-center pad-20'>
      <h1 className='text-4xl clr-foreground text-center font-bold'>{heading}</h1>
      <p className='text-center clr-foreground p-signin-msg'>{message}</p>
    </div>
  )
}

export default HomeMsg