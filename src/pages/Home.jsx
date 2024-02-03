import React from 'react'
import game from '../../public/game.png'
function Home() {
  return (
    <div className=' bg-stone-700 flex justify-between items-center h-screen pl-24'>


      {/* div left part */}
      <div className="left w-1/2 justify-between flex flex-col h-full py-16">
        <div className='mt-28'>
          <div className='bg-cyan-700  w-fit px-1 py-2 rounded-sm font-black'>FULL STACK DEVELOPER</div>
          <div className='text-4xl font-black  mt-4 text-white font-inika'>
            <div>No Guts, No Glory </div>

            <div>No Legend ,No Story </div>

          </div>
          <div className='mt-4 text-slate-300 text-lg'>I am this this this abd this  this is the time of the time and this gonna be the best of the all time this not gonna el</div>
          <div className='mt-8 underline text-green-700 font-bold text-lg'>Let's Chat</div>
        </div>




       
        <div className='left-bottom flex gap-16  text-white'>
          <div className='border-b-2 slate-300 py-2'> <span className='text-sm font-black'>10+</span > Projects</div>
          <div className='border-b-2 border-neutral-300 py-2'> <span> 120+</span> contributions</div>

        </div>

      </div>





      {/* Div right part */}
      <div className="right h-screen pt-14 ">
        {/* <div className='aspect-square w-96 bg-stone-800 rounded-full' ></div> */}

        <img src={game} alt="" className='object-cover w-full h-full' />
      </div>

    </div>

  )
}

export default Home
