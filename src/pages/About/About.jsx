import React from 'react'
import about from '/file.jpg'
function About() {
  return (
    <div className='  mt-0 p-0    flex flex-col'>
      <div id="about" class="relative bg-second overflow-hidden ">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-second sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-second transform translate-x-1/2"
              fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div class="pt-1"></div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 text-first">
              <div class="sm:text-center lg:text-left">
                <h2 class="my-6 text-2xl tracking-tight font-extrabold text-first sm:text-3xl md:text-4xl">
                  About me
                </h2>

                <p>
                

                  I'm Yubraj Khatri, a web developer with a strong proficiency in the MERN stack. With my expertise in MongoDB, Express.js, React.js, and Node.js, I craft dynamic and responsive web applications that meet the needs of clients and users alike. I'm passionate about staying updated with the latest technologies and continuously refining my skills to deliver high-quality solutions. My attention to detail and dedication to innovation ensure that the projects I work on are always at the forefront of modern web development. I take pride in my ability to create seamless user experiences and robust backend systems.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src={about} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
