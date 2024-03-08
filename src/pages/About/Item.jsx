import React from 'react'

function Item({name}) {
  return (
    <div className='button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  '>
    <span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>{name}</span>
  </div>
  )
}

export default Item