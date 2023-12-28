
import './App.css'


import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'

import Nav from './navigation/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/articles/Blog'
function App() {
 const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav/>}>
<Route index element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='portfolio' element={<Portfolio/>}/>
<Route path='blog' element={<Blog/>}/>



    </Route>
  )
 )

  return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
