import React from 'react'
import Image from 'next/image'

interface ContentCardProps {
  imgLoc: string
  alt: string
  title: string
  user: string
  date: Date
}

const ContentCard = ({imgLoc, alt, title, user, date} : ContentCardProps) => {
  const width = 300
  const height = 75

  return (
    <div className='border border-solid border-white flex flex-col items-center justify-center pad-30 gap-6 rounded-xl w-80'>
      <div className='flex flex-col items-center gap-6'>
        <Image
          src={imgLoc}
          width={width}
          height={height}
          alt={alt}
        />
        <div className='flex gap-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-lg leading-6'>{title}</h1>
            <h2 className='text-sm'>{user}</h2>
          </div>
          <h2>{date.toDateString()}</h2>
        </div>
        <button className='border border-solid border-white outline-0 pad-btn cursor-pointer rounded-md text-center hover:bg-(--foreground) hover:text-(--dark-gray-blue)'>
          Read more...
        </button>
      </div>
    </div>
  )
}

export default ContentCard