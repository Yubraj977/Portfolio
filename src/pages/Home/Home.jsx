import React from 'react'
import game from '/game.png'
import cyber from '/cyber.png'
import { FaFacebook, FaInstagram,FaLinkedin  } from "react-icons/fa";
import { FaXTwitter  } from "react-icons/fa6";




const rightBox=' text-sm text-white font-allerta transition-transform duration-500 ease-in hover:translate-x-[-6rem]   bg-gradient-to-br from-black to-gray-500 bg-opacity-1 py-2 px-4 rounded-lg flex'
const belowBox='bg-gradient-to-br from-black to-neutral-900 bg-opacity-1 w-1/2 px-8 flex flex-col justify-center py-4  hover:scale-110  transition-transform duration-300 ease-in hover:skew-x-6'
function Home() {
  return (
    <div className="main   flex flex-col lg:h-screen   md:h-screen lg:flex-row lg: pl-4 lg:pl-8 h-screen bg-black pt-16 lg:justify-between " >

<div className='text-white absolute flex flex-col top-1/2 transform -translate-y-1/2 font-64 font-bold '>
  <div className='text-white flex gap-4'>
    <span>.</span>
    <span>.</span>
    <span>.</span>
    
  </div>
  <div className='text-white gap-4 flex'>
    <span>.</span>
   
    <span>.</span>
    <span>.</span>
  </div>
  <div className='text-white flex gap-4'>
    <span>.</span>
    <span>.</span>
    <span>.</span>
   
  </div>
</div>


      {/* For the left part */}
      <div className='text-white flex-flex-col w-1/3 ml-[16rem] mt-40 h-fit'>

        <div className=' border-white  border-solid border-l-2 border--2'>
          <h3 className='text-3xl font-64 '>FULL STACK</h3>
          <h1 className='text-[3.1rem] font-64 '>DEVELOPER </h1>
        </div>
        <p className='text-[0.8rem] mt-4 font-inter  '>I love to create Learn update and fix."Hello! I'm a full-stack developer hailing from the beautiful land of Nepal, where I craft digital solutions from front-end to back-end with passion and expertise."</p>
        <button className='mt-6 border-2 border-fifth px-4 py-2 rounded-sm'>Let's Chat</button>
      </div>

     {/* For medium part */}
      <div className="right   lg: z-0 opacity-40 lg:opacity-100  h-[90%] w-[30%]  relative">
        <img src={cyber} alt="" className='object-cover w-full h-full z-0' />
        <div className='text-white  z-10 h-[7rem]    rounded-lg flex  absolute w-[44rem] left-[-20%] bottom-[-11.3%] '>
          <div className={belowBox}>
            <h1 className='font-allerta'>FRONTEND</h1>
            <p className='font-64 text-[9px] mt-3 '>What your See 👀, What is you believe it is  </p>
          </div>
          <div className={belowBox}>
          <h1 className='font-allerta'>BACKEND</h1>
            <p className='font-64 text-[8px] mt-3'>I am somwehre else. Your can't get me   </p>
          </div>
        </div>
      </div>


  
    
      {/* For the right part */}
      <div class='flex flex-col justify-center items-start gap-4 font-black relative right-[-6.7rem]  mb-28 '>
     
      <a href="https://twitter.com/YubrajK81639352" target='blank'> <div className={rightBox}><span className='mr-8'> <FaXTwitter  className='text-2xl'/>  </span> Twitter/ x</div></a>
      <a href="" target='bank'> <div className={rightBox}><span className='mr-8'> <FaFacebook   className='text-2xl'/>  </span> Facebook</div></a>
      <a href="https://www.linkedin.com/in/yubraj-khatri-155786243/" target='blank'><div className={rightBox}><span className='mr-8'> <FaLinkedin   className='text-2xl'/>  </span> Linkedin</div></a>
      <a href=""><div className={rightBox}><span className='mr-8' target='blank'> <FaInstagram  className='text-2xl'/>  </span> Instagram</div></a>
</div>

    </div>

  )
}

export default Home