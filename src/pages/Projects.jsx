import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import Graphics from '../Projects/Graphics';
import All from '../Projects/All';
import Creative from '../Projects/Creative';
import Web from '../Projects/Web';



function App() {
  return (
    <BrowserRouter>
      <div className='h-screen flex flex-col  items-center pt-top bg-first text-second'>
       
          <h1 className=' font-black text-3xl font-inika'>MY LATEST WORKS</h1>
          <p className='mt-6 align-center'>This is my some projects to showcase some prior skills and works</p>
          <nav className='mt-6'>
            <Link to='/all'>All</Link>
            <Link to='/web'>Web</Link>
            <Link to='/creative'>creative</Link>
            <Link to='/graphics'>Graphics</Link>
          </nav>

          <Routes>
            <Route path="/all" element={<Test />} />
            <Route path="/web" element={<Web />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/Graphics" element={<Graphics />} />

          </Routes>

        </div>
    
    </BrowserRouter>
  );
}

export default App;
