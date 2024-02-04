import React from 'react'
import game from '/game.png'
function Home() {
  return (
    <div className="main  bg-stone-700 flex flex-col lg:h-screen  md:h-screen lg:flex-row lg:justify-between pl-4 lg:pl-8 h-screen ">


      {/* For the left part */}
      <div className="left lg:w-1/2 flex flex-col  justify-center h-screen lg:h-auto  lg:justify-between my-10 z-10 ">
        <div className="top lg:mt-20 ">
        <h1 className='bg-cyan-700  w-fit px-1 py-2 rounded-sm font-black'>FULL STACK DEVELOPER</h1>
        <div className='text-6xl lg:text-4xl font-black  mt-4 text-white font-inika'>
            <div>No Guts, No Glory </div>
            <div>No Legend ,No Story </div>
          </div>
          <div className='mt-4 text-slate-300 text-2xl lg:text-lg'>I love to constumize every section thats why i choose coding. Come on lets build something for future together. It's all about liverage</div>
          <div className='mt-8 underline text-green-700 font-bold text-3xl font-black lg:text-lg'>Let's Chat</div>
        </div>


        {/* For left bottom part */}
        <div className="bottom">
          <div className='left-bottom flex gap-16  text-white mt-6'>
            <div className='border-b-2 slate-300 py-2 text-2xl'> <span className=' lg:text-sm font-black'>10+</span > Projects</div>
            <div className='border-b-2 border-neutral-300 py-2 text-2xl'> <span> 120+</span> contributions</div>
          </div>
        </div>
      </div>


      {/* For the right part */}
      <div className="right lg:h-screen absolute lg:relative z-0 opacity-40 lg:opacity-100 h-screen">
        <img src={game} alt="" className='object-cover w-full h-full' />

      </div>

    </div>

  )
}

export default Home