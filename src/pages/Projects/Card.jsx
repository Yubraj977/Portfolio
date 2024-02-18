import React from 'react'


function Card({image,title,technology,link ,description}) {
  return (
    <>
    
<div className="max-w-xs bg-white border border-gray-20 rounded-lg shadow dark:bg-gray-80 dark:border-gray-70">
   <div className=' h-40 w-full'>
    <a href={link} >
        <img className="rounded-t-lg w-full h-full object-cover" src={image} alt="" />
    </a>
    </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <p>{technology}</p>
        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 ">
            view
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>




    </>
  )
}

export default Card
