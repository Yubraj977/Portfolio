import React, { useEffect } from 'react'
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

            <nav className=" fixed w-full top-0  bg-black z-50 font-allerta text-white">
                <div className='flex gap-40 items-between py-4  lg:px-4 md:px-4 '>
                    <div className='font-allerta text-white text-2xl pl-3'>YUBRAJ</div>

                    <div className="Middle  items-center gap-4  text-white font-inter hidden lg:flex md:flex z-50 text-base" >
                        <div onClick={() => scrollToSection(home)} className='font-allerta'>Home</div>
                        <div onClick={() => scrollToSection(about)} className='font-allerta'>About</div>
                        <div onClick={() => scrollToSection(projects)} className='font-allerta'>Projects</div>
                        <div onClick={() => scrollToSection(testmimonials)} className='font-allerta'>Testimonials</div>
                        <div onClick={() => scrollToSection(services)} className='font-allerta'>services</div>
                    </div>

                 
                     <button  className="text-white bg-[#24292F] rounded-lg text-sm  text-center inline-flex items-center px-3 ml-40">
                        
                        <a href="https://github.com/Yubraj977" target='blank'><svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                        </a>
                        <a href="https://github.com/Yubraj977" target='blank'>
                       Github
                       </a>
                    </button>
                    

                  
                </div>
            </nav>



            <div className='bg-first' >
                <div className='' ref={home} ><Home /></div>
                <div className='' ref={about}><About /></div>
                <div className='' ref={projects}><Projects /></div>
                <div className=' h-screen' ref={testmimonials}><Testimonials /></div>
                <div className=' h-screen' ref={services}><Services /></div>

            </div>
        </div>
    )
}

export default Nav
