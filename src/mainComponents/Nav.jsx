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
            <nav class="bg-stone-700 p-4 fixed w-full top-0 z-10">
                <div className='flex justify-between '>
                    <div className="left">Logo</div>
                    <div className="Middle flex justify-between gap-4">
                        <div onClick={() => scrollToSection(home)}>Home</div>
                        <div onClick={() => scrollToSection(about)}>About</div>
                        <div onClick={() => scrollToSection(services)}>Services</div>

                        <div onClick={() => scrollToSection(testmimonials)}>Testimonials</div>
                        <div onClick={() => scrollToSection(projects)}>Projects</div>
                    </div>

                    <div className="right flex gap-4 bg-stone-700">
                        <div className='Github'><i class="fa-brands fa-github"></i></div>
                        <div className='linkenden'><i class="fa-brands fa-linkedin"></i></div>
                        <div className='Twitter'><i class="fa-brands fa-twitter"></i></div>
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
