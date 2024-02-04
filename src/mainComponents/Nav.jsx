import React from 'react'
import { useRef } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Testimonials from '../pages/Testimonials'
import Projects from '../pages/Projects'
function Nav() {
    const home = useRef(null)
    const about = useRef(null)
    const services = useRef(null)
    const testmimonials = useRef(null)
    const projects = useRef(null)
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            <nav class=" fixed w-full top-0 z-10 bg-stone-700">
                <div className='flex justify-between items-between  lg:px-4 md:px-4'>
                    <div className="left font-bold text-2xl text-white"><span className='font-black text-green-700 text-3xl'>Yubraj</span> Khatri</div>
                    <div className="Middle  items-center gap-4 font-bold text-white hidden lg:flex md:flex" >
                        <div onClick={() => scrollToSection(home)}>Home</div>
                        <div onClick={() => scrollToSection(about)}>About</div>
                        <div onClick={() => scrollToSection(services)}>Services</div>

                        <div onClick={() => scrollToSection(testmimonials)}>Testimonials</div>
                        <div onClick={() => scrollToSection(projects)}>Projects</div>
                    </div>

                    <div className="right flex gap-4 lg:mr-8 text-white text-sm justify-center items-center">
                        <div className='Twitter '>  <a href="https://twitter.com/YubrajK81639352" target='blank'> <span><i class="fa-brands fa-twitter"></i>  </span> <span className='mr-2'>Twitter</span></a> </div>
                        <div className='Github'>  <a href="https://github.com/Yubraj977" target='blank'> <span><i class="fa-brands fa-github"> </i> </span>  <span className='mr-2'>Github</span> </a> </div>
                        <div className='linkenden'> <a href="https://www.linkedin.com/in/yubraj-khatri-155786243/" target='blank'>  <span> <i class="fa-brands fa-linkedin"></i> </span> <span className='mr-2'>Linkenden</span> </a> </div>
                        
                    </div>

                </div>
            </nav>
           
            <div className='' ref={home}><Home/></div>
            <div className='' ref={about}><About/></div>
            <div className='bg-red-500 h-screen' ref={services}><Services/></div>
            <div className='bg-red-500 h-screen' ref={testmimonials}><Testimonials/></div>
            <div className='bg-red-500 h-screen' ref={projects}><Projects/></div>

        </div>
    )
}

export default Nav
