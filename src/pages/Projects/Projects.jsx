import React, { useState } from 'react';
import Card from './Card';

import project from './project'



function App() {

  const [data, setdata] = useState(project)

  const filter = (cate) => {
    const filteredItems = project.filter((elem) => elem.category === cate);
    setdata(filteredItems)
  }
  return (
    <div className='lg:px-side  pt-top flex flex-col items-center '>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My <span class="text-blue-600 dark:text-blue-500">Some</span> Projects.</h1>
      <div className="choose">



        <button onClick={() => setdata(project)} type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">All</button>
        <button onClick={() => { filter('web') }} type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Web</button>
        <button onClick={() => { filter('fun') }} type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Fun</button>
        <button onClick={() => { filter('graphics') }} type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Gharaphics</button>



      </div>
      <div className='flex  gap-4 flex-wrap justify-center items-center'>
        {data.map((element) => {
          const { title, image, technology, link, id,description } = element
          return (
            <Card key={id} image={image} title={title} technology={technology} link={link} description={description}/>
          )
        })}
        /</div>

    </div>
  );
}

export default App;
