import React, {ReactDOM, useState, useEffect} from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import { useHistory } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'


import Sort from "./Sort";
import Dart from './Dart';




function Home() {
  
  return (
    <>
      <div>
        <h1 className="z-2 font-primary font-semibold text-5xl text-center text-white mt-16 py-6">Example projects</h1>
      </div>
          
      <div className="z-2 py-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
        
        <a className="group no-underline h-120 w-72 mx-auto bg-[#1A1A1A] transition duration-500 hover:scale-125" href="/sort">
          <div className="h-72 relative">
            <div>
              <img alt="Sorry, this image is missing." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5Vw8Wz33E7GN1UxXm26y-KMaDfYlYPLXdQ&usqp=CAU" className="object-fill h-72 w-72"/>
            </div>
          </div>
          <div className="h-56 relative bg-[#1A1A1A]">
            <div className="font-primary text-white group-hover:text-[#C4344F] text-2xl pt-4 px-4 font-semibold">
              Sorting algorithms
            </div>
            <div className="text-lg text-white p-4 group-hover:text-[#C4344F] font-light">
              Some basic sorting algorithms visualized using Python.
            </div>
          </div>
        </a>


        <a className="group no-underline h-120 w-72 mx-auto bg-[#1A1A1A] transition duration-500 hover:scale-125 hover:bg-[#1A1A1A]" href="/dart">
          <div className="h-72 border-b-4 border-black relative">
            <div>
              <img alt="Sorry, this image is missing." src="https://media.istockphoto.com/id/168718452/pl/zdj%C4%99cie/dart-na-celu.jpg?s=612x612&w=0&k=20&c=bvBKt1OGDlir8sdtd_RDVyb-DurapGoGTfEoh3OL9zw=" className="object-fill h-72 w-72"/>
            </div>
          </div>
          <div className="h-56 relative bg-[#1A1A1A]">
            <div className="font-primary text-white group-hover:text-[#22d3ee] text-2xl pt-4 px-4 font-semibold">
              Dart app
            </div>
            <div className="text-lg text-white p-4 group-hover:text-[#22d3ee] font-light">
              An easy way to keep track of your score in a game of dart!
            </div>
          </div>
        </a>

      
        <a className="group no-underline h-120 w-72 mx-auto bg-[#1A1A1A] transition duration-500 hover:scale-125 hover:bg-gray-800" href="/sort">
          <div className="h-72 border-b-4 border-black relative">
            <div>
              <img alt="Sorry, this image is missing." src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Threes%21_app_icon.png" className="object-fill h-72 w-72"/>
            </div>
          </div>
          <div className="h-56 relative bg-[#1A1A1A]">
            <div className="font-primary text-white group-hover:text-[#C4344F] text-2xl pt-4 px-4 font-semibold">
              Third panel
            </div>
            <div className="text-lg text-white p-4 group-hover:text-[#C4344F] font-light">
              This is a third panel used to go to the third page.
            </div>
          </div>
        </a>
        
      </div>
    </>
  );
}

export default Home;
