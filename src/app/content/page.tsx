'use client'
import React, { useState } from 'react'
import ContentCard from '@/components/ContentCard'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Content() {
  const [contentList, setContentList] = useState<[]>([])
  const [searchContent, setSearchContent] = useState<string>("")
  
  const size = 20

  return (
    <div className='bg-(--dark-gray-blue) w-full h-full text-(--foreground) flex overflow-auto overflow-x-hidden'>
      <div className='h-screen fixed'>
        <Navbar/>
      </div>
      <div className='pad-30 w-full m-left'>
        <div className='flex items-center justify-center gap-16 flex-1 margin-bottom'>
          <div className='border border-solid border-white flex pad-inp rounded-2xl w-3/5 justify-center items-center'>
            <input 
              type="search" 
              placeholder='Search for topics...'
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value)}
              className='w-full'  
            />
            <button>
              <Image
                src="/images/search.svg"
                width={size}
                height={size}
                alt='Search'
              />
            </button>
          </div>
          <div className='flex justify-center items-center shrink-0'>
            <button className='border border-solid border-white flex items-center justify-center pad-btn-2 rounded-md cursor-pointer hover:text-(--dark-gray-blue) hover:bg-white margin-bottom'>
              + Create post
            </button>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-10'>
          {/* Content is here */}
        </div>
      </div>
      
    </div>
  )
}