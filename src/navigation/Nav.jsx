import React from 'react'
import logo from '../assets/logo.png'
import { Outlet,NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <>
    <header className='bg-gray-200 fixed flex flex-col h-full items-center justify-center w-16' >
      <h1><img src={logo} alt="Logo" className='h-12 absolute top-1 left-1'/></h1>
       
       
       
       <nav className='flex flex-col items-center gap-2'>

        <NavLink to='/'><p className='text-2xl'><ion-icon name="home-outline"></ion-icon></p></NavLink>
        <NavLink to='/about'><p className='text-2xl'><i class="fa-solid fa-user"></i></p></NavLink>
        <NavLink to='/portfolio' ><p className='2xl'> <i class="fa-brands fa-creative-commons-nd"></i></p></NavLink>
        <NavLink to='/contact' ><p className='text-2xl'><i class="fa-solid fa-phone"></i></p></NavLink>
        <NavLink to='/blog' ><p className='text-2xl'><i class="fa-brands fa-creative-commons-nd"></i></p></NavLink>
       </nav>
    </header>
    <Outlet/>
    </>
  )
}
