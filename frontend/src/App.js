import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Sort from './components/Sort'
import Dart from './components/Dart'
import RepCounter from './components/RepCounter'




function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path='*' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/sort' element={<Sort/>} />
        <Route path='/dart' element={<Dart/>} />
        <Route path='/repcounter' element={<RepCounter/>} />
      </Routes>

    </>
  );
}
export default App;
