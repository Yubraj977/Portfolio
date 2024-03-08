import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const data = [
  { id: 1, name: "hello" },
  { id: 2, name: "hg" },
  { id: 3, name: "sdfghjk" },
  { id: 4, name: "sdfghjk" },
  { id: 5, name: "sdfghjk" },
  { id: 6, name: "hello" },
  { id: 7, name: "hello" },
  { id: 8, name: "hello" },
  { id: 9, name: "hello" },
  { id: 10, name: "Gig Chat in the time " },

];

function Services() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div className='h-screen flex flex-col justify-center items-center text-slate-400 bg-first'>
      <h1 className='text-6xl mb-10  font-sans font-semibold'>Some Services i offer</h1>
      <div ref={ref}>
        {data.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeIn' }}
          >
            <p className=' text-5xl my-2 font-pano  transition ease-in-out delay-150 hover:scale-110 duration-500 hover:text-second text-center'>
              <sup className='px-4 text-xl'>{item.id}</sup>
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="text-sm  pt-11 bg-first">All rights reserved &copy; Yubraj Khatri</p>
    </div>
  );
}

export default Services;
