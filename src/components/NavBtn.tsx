import React from 'react'
import Image from 'next/image'
import '@/styles/nav.css'

interface NavBtnProps {
  imgLocation: string,
  btnText: string
}

const NavBtn = ({ imgLocation, btnText }:NavBtnProps) => {
  const imgSize = 30;

  return (
    <button className='flex cursor-pointer gap-12 items-center nav-btn'>
      <Image
        src={imgLocation}
        width={imgSize}
        height={imgSize}
        alt={btnText}
      />
      <h3 className='text-left'>{btnText}</h3>
    </button>
  )
}

export default NavBtn