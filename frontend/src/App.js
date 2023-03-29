import './App.css';
import React, {ReactDOM, useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import { useHistory } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'


import Navbar from './components/Navbar';
import Home from "./components/Home";
import Sort from "./components/Sort";
import Dart from './components/Dart';
import RepCounter from './components/RepCounter';




function App() {
  


  return (
    <>

      <Navbar />

      <Routes>
        <Route path='*' element={<Home/>} />
        <Route path='/sort' element={<Sort/>} />
        <Route path='/dart' element={<Dart/>} />
        <Route path='/repcounter' element={<RepCounter/>} />
      </Routes>

    </>
  );
}

export default App;
