import React from 'react'
import about from '/file.jpg'
import Stacks from './Stacks'
import yubraj from '/yub.png'
function About() {
  return (
    // <div className='h-screen p-side flex'>
    //   <div className='left  h-full w-1/2'>
    //     <img src={yubraj} alt="" className=' h-full w-full object-cover'/>
    //   </div>
    //   <div className='right  h-full w-1/2'>
    //     <h1 className='font-64 text-1xl text-white'>Know little bit more about me</h1>
    //   </div>
    // </div>

    <div class="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24 bg-first h-screen flex justify-center items-center ">
      <blockquote class="relative grid items-center bg-black  shadow-xl md:grid-cols-3 rounded-xl text-white">

        <img class="hidden object-cover w-full h-full rounded-l-xl md:block" src={yubraj} />

        <article class="relative p-6 md:p-8 md:col-span-2">
          <svg class="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block" width="256"
            height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
              stroke="currentColor" stroke-width="8"></path>
          </svg>

          <div class="space-y-8">
            <p class="text-base sm:leading-relaxed md:text-2xl font-inter text-balance align-middle">
              Hi, I'm Yubraj, a 20-year-old developer with a passion for creating innovative solutions.
               I graduated from high school in Science and have been immersed in the tech industry for over a year.
                Throughout my journey, I've gained extensive experience in the programming language called JavaScript.
                 I thrive in challenging environments and enjoy collaborating with teams to develop cutting-edge software applications.
            </p>

            <footer class="flex items-center space-x-4 md:space-x-0">
              <img class="w-12 h-12 rounded-full md:hidden" src={yubraj} />
              <span class="font-bold text-lg">kepp Scrolling  👇👇👇</span>
            </footer>
          </div>
        </article>
      </blockquote>
    </div>
  )
}

export default About
