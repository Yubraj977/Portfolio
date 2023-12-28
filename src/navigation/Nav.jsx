import React from 'react'
import logo from '../assets/logo.png'
import { Outlet,NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <>
    <header className='flex justify-between items-center bg-slate-200 px-10' >
      <h1><img src={logo} alt="Logo" className='h-12 ml-25'/></h1>
       <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about' className='ml-5'>About</NavLink>
        <NavLink to='/portfolio' className="ml-5">Portfolio</NavLink>
        <NavLink to='/contact' className="ml-5">Contact</NavLink>
        <NavLink to='/blog' className='ml-5'>Blog/Articles</NavLink>
       </nav>
    </header>
    <Outlet/>
    </>
  )
}
