import React from 'react'
const techStacks=[
    {id:1,name:"Javascript"},
    {id:2,name:"Html"},
    {id:3,name:"Css"},
    {id:4,name:"React"},
    {id:5,name:"Tailwind"},
    {id:6,name:"Express"},
    {id:7,name:"MongoDb"},
    {id:8,name:"Web-Socket"},
    {id:9,name:"WebRTc"},
    {id:10,name:"Boostrap"},
    {id:11,name:"Tailwind"},
    {id:12,name:"Git"},
    {id:13,name:"Github"},
    {id:14,name:"Jwt"},
    {id:15,name:"Mongoose"},
    {id:16,name:"Flowbite"},
    {id:17,name:"Framer motion"},
    {id:18,name:"Chart js"},
    {id:19,name:"Gsap"},
    {id:20,name:"NOde Js"},
  ]
function Stack() {
  return (
    <div className='pt-40 bg-first text-second flex items-center flex-col px-side'>
    <h1 className='text-fifth text-4xl' >My Stacks</h1>
     <ul className='flex justify-center flex-wrap mt-10'>
      {techStacks.map((item)=><li className='m-4 text-3xl text-fifth'  id={item.id}>{item.name}</li>)}
     </ul>
   
    </div>
  )
}

export default Stack