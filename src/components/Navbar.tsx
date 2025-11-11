import React from 'react'
import NavBtn from './NavBtn'
import '@/styles/nav.css'

const Navbar = () => {
  const navItems = [
    {name: 'Home', icon: 'home.svg'},
    {name: 'Profile', icon: 'profile.svg'},
    {name: 'Meet', icon: 'meet.svg'},
    {name: 'Content', icon: 'content.svg'}
  ]

  return (
    <nav className='flex flex-col justify-center h-screen w-60 gap-10 navbar'>
      {
        navItems.map((item, i) => (
          <NavBtn
            key={i}
            imgLocation={`/images/${item.icon}`}
            btnText={`${item.name}`}
          />
        ))
      }
    </nav>
  )
}

export default Navbar