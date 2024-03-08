import React, { useState,useEffect } from 'react'
import { useRef } from 'react'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Testimonials from '../pages/Testimonials/Testimonials'
import Projects from '../pages/Projects/Projects'

function Nav() {
    
    const home = useRef(null)
    const about = useRef(null)
    const services = useRef(null)
    const testmimonials = useRef(null)
    const projects = useRef(null)
   
useEffect(() => {
    const handleScroll = () => {
  
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            
        }, 250);
    };

    let timeout;
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div className='bg-first'>
            <nav class=" fixed w-full top-0  bg-first text-second z-50">
                <div className='flex justify-between items-between px-2  lg:px-4 md:px-4'>
                    <div className="left font-bold text-2xl text-second flex flex-col lg:flex-row"><span className='font-black text-green-700 text-3xl'>Yubraj</span> Khatri</div>
                    <div className="Middle  items-center gap-4 font-bold text-second hidden lg:flex md:flex z-50" >
                        <div onClick={() => scrollToSection(home)} >Home</div>
                        <div onClick={() => scrollToSection(about)}>About</div>
                    
                        <div onClick={() => scrollToSection(projects)}>Projects</div>
                        <div onClick={() => scrollToSection(testmimonials)}>Testimonials</div>
                        <div onClick={() => scrollToSection(services)}>services</div>
                    </div>

                    <div className="right flex gap-4 mr-4 lg:mr-8 text-second text-sm justify-center items-center z-50">
                        <div className='Twitter '>  <a href="https://twitter.com/YubrajK81639352" target='blank'> <span><i class="fa-brands fa-twitter"></i>  </span> <span className='mr-2'>Twitter</span></a> </div>
                        <div className='Github'>  <a href="https://github.com/Yubraj977" target='blank'> <span><i class="fa-brands fa-github"> </i> </span>  <span className='mr-2'>Github</span> </a> </div>
                        <div className='linkenden'> <a href="https://www.linkedin.com/in/yubraj-khatri-155786243/" target='blank'>  <span> <i class="fa-brands fa-linkedin"></i> </span> <span className='mr-2'>Linkenden</span> </a> </div>
                        
                    </div>

                </div>
            </nav>
           <div className='bg-first' >
            <div className='mt-9' ref={home} ><Home/></div>
            <div className='' ref={about}><About/></div>
            

            <div className='' ref={projects}><Projects/></div>
            <div className=' h-screen' ref={testmimonials}><Testimonials/></div>
            <div className=' h-screen' ref={services}><Services/></div>
            
            </div>
        </div>
    )
}

export default Nav
