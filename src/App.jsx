import React from 'react'
import "./App.css"
import Layout from './Layout/Layout'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Career from "./Pages/Career"
import Blog from './Pages/Blog'
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import PageNotFound from "./Pages/pagenotfound"
import ScrollToTop from './Pages/ScrollTop'


const App = () => {
  return (
    <>
    <ScrollToTop/>
<Routes>
  <Route path='*' element={<PageNotFound/>}/>
  <Route element={<Layout/>} >
    <Route path='/' element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/contact' element={<Contact/>}/>

  </Route>
</Routes>
    </>
  )
}

export default App