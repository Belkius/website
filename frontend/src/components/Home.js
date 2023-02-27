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
        <h1 className="font-primary font-extrabold text-4xl text-center text-palette-primary py-2">Example projects</h1>
      </div>
          
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
        
        <a className="no-underline h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter" href="/sort">
          <div className="h-72 border-b-2 border-palette-lighter relative">
            <div>
              <img alt="Sorry, this image is missing." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5Vw8Wz33E7GN1UxXm26y-KMaDfYlYPLXdQ&usqp=CAU" />
            </div>
          </div>
          <div className="h-48 relative bg-white rounded-lg ">
            <div className="font-primary text-black text-palette-primary text-2xl pt-4 px-4 font-semibold">
              Sorting algorithms
            </div>
            <div className="text-lg text-gray-600 p-4 font-primary font-light">
              Some basic sorting algorithms visualized using Python.
            </div>
          </div>
        </a>


        <a className="no-underline h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter" href="/dart">
          <div className="h-72 border-b-2 border-palette-lighter relative">
            <div>
              <img alt="Sorry, this image is missing." src="https://media.istockphoto.com/id/168718452/pl/zdj%C4%99cie/dart-na-celu.jpg?s=612x612&w=0&k=20&c=bvBKt1OGDlir8sdtd_RDVyb-DurapGoGTfEoh3OL9zw=" />
            </div>
          </div>
          <div className="h-48 relative bg-white rounded-lg ">
            <div className="font-primary text-black text-palette-primary text-2xl pt-4 px-4 font-semibold">
              Dart app
            </div>
            <div className="text-lg text-gray-600 p-4 font-primary font-light">
              An easy way to keep track of your score in a game of dart!
            </div>
          </div>
        </a>

      
        <a className="no-underline h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter" href="/sort">
          <div className="h-72 border-b-2 border-palette-lighter relative">
            <div>
              <img alt="Sorry, this image is missing." src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Threes%21_app_icon.png" />
            </div>
          </div>
          <div className="h-48 relative bg-white rounded-lg ">
            <div className="font-primary text-black text-palette-primary text-2xl pt-4 px-4 font-semibold">
              Third panel
            </div>
            <div className="text-lg text-gray-600 p-4 font-primary font-light">
              This is a third panel used to go to the third page.
            </div>
          </div>
        </a>
      
      </div>




    </>
  );
}

export default Home;
