import React from 'react'
import game from '../../public/game.png'
function Home() {
  return (
    <div className=' bg-stone-700 flex justify-between items-center h-screen pl-20'>
      
      <div className="left w-1/2">
        <div className='bg-cyan-700  w-fit p-2 rounded-sm font-black'>FULL STACK DEVELOPER</div>
        <div className='text-4xl font-black ml-4 mt-4 text-white'>
          <div>NO GUTS </div>
          <div>NO GLORY</div>
          <div>NO LEGEND </div>
          <div>NO STORY </div>
        </div>
        <div className='mt-4 text-slate-300 text-lg'>I am this this this abd this  this is the time of the time and this gonna be the best of the all time this not gonna el</div>
        <div className='mt-8 underline text-green-700 font-bold text-lg'>Let's Chat</div>
      </div>
      <div className="right h-screen pt-14 ">
        {/* <div className='aspect-square w-96 bg-stone-800 rounded-full' ></div> */}

       <img src={game} alt="" className='object-cover w-full h-full'/>
        
      </div>
      </div>
   
  )
}

export default Home
