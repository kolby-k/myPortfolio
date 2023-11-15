import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="p-1 mr-2 w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='red-gradient_text'>KK</p>
      </NavLink>
      <nav className='flex text-lg gap-4 font-medium'>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar