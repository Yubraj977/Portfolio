import React, { useState } from 'react';
import Card from './Card';
import {motion} from 'framer-motion'
import project from './project'
import { useInView } from 'react-intersection-observer';
import Stack from '../../Helpers/Stack';
import { Button } from 'flowbite-react';


function App() {
  

  const [data, setdata] = useState(project)
  const { ref, inView } = useInView({ triggerOnce: false });
  const filter = (cate) => {
    const filteredItems = project.filter((elem) => elem.category === cate);
    setdata(filteredItems)
  }
  return (
    <div className='lg:px-side  pt-top flex flex-col items-center bg-first'>
      <h1 class="mb-4 text-4xl font-extrabold  font-allerta leading-none tracking-tight text-second md:text-5xl lg:text-6xl dark:text-fifth">My <span class="text-blue-600 dark:text-blue-500">Some</span> Projects.</h1>
      <div className="choose flex gap-6 mb-8">



        <Button onClick={() => setdata(project)}  color='dark' >All</Button>
        <Button onClick={() => { filter('web') }}  color='dark' >Web</Button>
        <Button onClick={() => { filter('fun') }}  color="dark" >Fun</Button>
        <Button onClick={() => { filter('graphics') }} color="dark" >Gharaphics</Button>
        



      </div>
      <div className='flex  gap-4 flex-wrap justify-center items-center' ref={ref}>
        {data.map((element,i) => {
          const { title, image, technology, link, id,description } = element;
          return (
            <motion.div
    
            key={element.id}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeInOut' }} // Adjust duration and delay values here
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
            >
            <Card key={element.id} image={image} title={title} technology={technology} link={link} description={description}/>
         </motion.div>
          
            )
        })}
        </div>
        <Stack/>

    </div>
  );
}

export default App;
