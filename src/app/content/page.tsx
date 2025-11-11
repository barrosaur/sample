'use client'
import React, { useState } from 'react'
import ContentCard from '@/components/ContentCard'

export default function Content() {
  const [contentList, setContentList] = useState<[]>([])
  
  return (
    <div className='bg-(--dark-gray-blue) w-full h-full text-(--foreground)'>
      <ContentCard/>
    </div>
  )
}