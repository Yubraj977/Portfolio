import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Copyright from '../../Helpers/Copyright';


const data = [
  { id: 1, name: "Digital Solution" },
  { id: 2, name: "Teaching Online" },
  { id: 3, name: "Collobrative Team works" },
  { id: 4, name: "Develop sites for personal use" },
  { id: 5, name: "Develop sites for professional sites" },
  { id: 6, name: "Manage existing published sites" },
  { id: 7, name: "Full stack webapps and apis" },
  { id: 8, name: "post for social medias" },


];

function Services() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (

    <div className=' flex flex-col justify-center items-center text-slate-400 bg-first mt-top'>
      <h1 className='lg:text-6xl mb-10  font-allerta font-semibold text-center text-4xl'>Some Services I offer</h1>
      <div ref={ref}>
        {data.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeIn' }}
          >
            <p className=' text-4xl text-fifth my-6   transition ease-in font-montserrat delay-250 hover:scale-110 duration-900 hover:text-second text-center'>
              <sup className='px-4 text-[0.8rem]'>{item.id}</sup>
              {item.name}
            </p>
          </motion.div>
        ))}
       
      </div>
      <Copyright />
    </div>




  );
}

export default Services;
