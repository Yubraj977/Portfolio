import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Stack from './Stack';
//Comment
const data = [
  { name: "Html", duration: "3yrs", color:"yellow" },
  { name: "Css", duration: "3yrs", color:"yellow" },
  { name: "JavaScript", duration: "3yrs", color:"yellow" },
  { name: "Node js", duration: "3yrs", color:"yellow" },
  { name: "React", duration: "3yrs", color:"yellow" },
  { name: "Photoshop", duration: "3yrs", color:"yellow" },
  { name: "Ais & Prompts", duration: "3yrs", color:"yellow" },
  { name: "Git", duration: "3yrs", color:"yellow" },
  { name: "Github", duration: "3yrs", color:"yellow" },
  { name: "Linux", duration: "3yrs", color:"yellow" },
  { name: "MongoDb", duration: "3yrs", color:"yellow" },
  { name: "Socket io", duration: "3yrs", color:"yellow" },
  { name: "WebRtc", duration: "3yrs", color:"yellow" },
  { name: "Express js", duration: "3yrs", color:"yellow" },
  { name: "Framer Motion", duration: "3yrs", color:"yellow" },
  { name: "Three js", duration: "3yrs", color:"yellow" },
  { name: "React Native", duration: "3yrs", color:"yellow" },

];

function Stacks() {

  return (
    <div className=' flex flex-col justify-center items-center m-6  '>
      <h1 className='text-second font-bold text-2xl text-center'>My Tech Stacks</h1>
      <p className='text-slate-300 font-mono mb-4'>Fell free to move these boxes and have a fun for a while</p>
      <div className="h-5/6 w-5/6 flex flex-col justify-center items-center"  >
        {data.map((item, index) => (
          <motion.div
          drag
          whileHover={{ scale: 1.1 }}
         
          dragConstraints={{
            top: -100,
            left: -600,
            right: 600,
            bottom: 100,
          }}
          
          >
           <Stack name={item.name}/>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Stacks;
