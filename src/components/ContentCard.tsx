import React from 'react'
import Image from 'next/image'

interface ContentCardProps {
  img: string
}

const ContentCard = () => {
  return (
    <div className='border border-solid border-white flex flex-col items-center justify-center pad-30 gap-6 rounded-xl w-80'>
      <div className='flex flex-col items-center gap-6'>
        <Image
          src="/images/test.jpg"
          width={300}
          height={75}
          alt='Sample Image'
        />
        <div className='flex gap-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-lg leading-6'>Freedom Stance Post</h1>
            <h2 className='text-sm'>@barrosaur</h2>
          </div>
          <h2>January 1, 2025</h2>
        </div>
        <button className='border border-solid border-white outline-0 pad-btn cursor-pointer rounded-md text-center hover:bg-(--foreground) hover:text-(--dark-gray-blue)'>
          Read more...
        </button>
      </div>
    </div>
  )
}

export default ContentCard