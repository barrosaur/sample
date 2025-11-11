import React from 'react'
import { Navbar, NavBtn } from '@/components/components'

export default function Home() {
  return (
    <main className='bg-(--dark-gray-blue) flex justify-center text-(--foreground) w-screen h-screen'>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="pad-30 flex flex-col">
        <section className='flex gap-30 margin-top'>
          <div className='flex flex-col flex-1 font-bold gap-3 justify-center'>
            <h1 className='text-5xl'>Welcome</h1>
            <h3 className='text-2xl'>TO SAMPLE</h3>
          </div>
          <div className='flex items-center pad-30 txt-border'>
            <p>
              Read, interact, and meet people here with the same interest as you!.
              Read things people say about other things, interact with what they say,
              and meet new people with the same interests as you! You can even start
              an argument if you want 😈.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>You may be interested</h2>
            <NavBtn
              imgLocation="/images/view-all.svg"
              btnText='View All'
            />
          </div>
          <div></div>
        </section>
      </div>

    </main>
  )
}