import React from 'react'
import char from '../assets/char.png'
import char2 from '../assets/char2.png'
export default function Home() {
  return (
    <div className='ml-16 h-screen bg-slate-300'>
      <div className="top"></div>
      <div className="main flex">
        <div className="left w-1/2 flex flex-col justify-center items-center">


          <div className="intro pl-10">
            <div className='border-l-2 border-gray-500 pl-10 mt-40'>
              <h1 className='font-sans font-bold text-6xl '>Yubraj Khatri</h1>
              <h3 className='font-sans font-bold font-3xl'>Web developer</h3>
            </div>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-10 ml-10">
              View magic
            </button>
          </div>

        <div className='absolute bottom-4 ml-16 left-24 flex gap-3'>
          <div className="border-t-2 border-gray-500 w-10 mt-4"></div>
          <div className="bo">View projects</div>
        
          <div className="icon border-2 rounded-full border-gray-500 border-solid  w-5 h-5 mt-1 flex justify-center items-center"> <ion-icon name="arrow-down-outline"></ion-icon></div>

          </div>
        </div>
        <div className="right w-1/2">
          <img src={char} alt="" />
        </div>
      </div>
    </div>
  )
}
