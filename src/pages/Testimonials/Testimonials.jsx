import React from 'react'
import { motion } from 'framer-motion'
import cvPdf from '/cv.pdf'
import cvImg from '/cv.jpg'
function Testimonials() {
  return (
    <div className='flex flex-col items-center pt-top  bg-first'>
      <h1 className='text-4xl text-slate-400 font-allerta text-center'>No Testimonals Right now Let's watch my resume</h1>
      <div className='h-[44rem]   mt-6'>
        <img src={cvImg} alt="" className='h-full w-full object-cover' />
      </div>

      <a href={cvPdf} download="cv.pdf" className="border px-4 py-2 text-white mt-6">
        Download Now 📃
      </a>

    </div>
  )
}

export default Testimonials
