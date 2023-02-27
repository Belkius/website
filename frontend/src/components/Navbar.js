import React, {ReactDOM, useState, useEffect} from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import { useHistory } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'


import Sort from "./Sort";
import Home from './Home';



function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <>
        <nav className="bg-[#8AC80B]">
          <div className="flex items-center justify-between px-4 py-2">
              <a href="/" className="no-underline flex items-center p-3 px-4">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-9" alt="Logo" />
                  <span className="text-xl text-white font-semibold">Belkius</span>
              </a>
            <div className="hidden md:flex p-4 border border-none rounded-lg bg-transparent text-sm font-medium" id="navbar-pc">
              <a href="/" className="no-underline px-3 text-white rounded hover:text-[#222629]" aria-current="page">Projects</a>     
              <a href="#" className="no-underline px-3 text-white rounded hover:text-[#222629]">About Me</a>            
              <a href="#" className="no-underline px-3 text-white rounded hover:text-[#222629]">Skills</a>
              <a href="#" className="no-underline px-3 text-white rounded hover:text-[#222629]">Website Info</a>    
              <a href="#" className="no-underline px-3 text-white rounded hover:text-[#222629]">Contact</a>
            </div>

            <button type="button" className="block md:hidden text-gray-700 hover:text-blue-700 focus:text-blue-700 focus:outline-none" onClick={() => setMenu(!menu)}>
            <svg viewBox="0 0 20 20" className="w-10 h-10 fill-current">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
            </svg>
          </button>
          </div>
          <div className={`${menu ? 'block' : 'hidden'} md:hidden w-auto px-6 py-1`}>
              <a href="/" className="no-underline text-left block px-10 py-2 rounded-md hover:bg-red-200 text-xl font-semibold text-gray-700 hover:text-blue-700" aria-current="page">Projects</a>
              <a href="#" className="no-underline text-left block px-10 py-2 rounded-md hover:bg-red-200 text-xl font-semibold text-gray-700 hover:text-blue-700">About Me</a>
              <a href="#" className="no-underline text-left block px-10 py-2 rounded-md hover:bg-red-200 text-xl font-semibold text-gray-700 hover:text-blue-700">Skills</a>
              <a href="#" className="no-underline text-left block px-10 py-2 rounded-md hover:bg-red-200 text-xl font-semibold text-gray-700 hover:text-blue-700">Website Info</a>
              <a href="#" className="no-underline text-left block px-10 py-2 rounded-md hover:bg-red-200 text-xl font-semibold text-gray-700 hover:text-blue-700">Contact</a>
          </div>
        </nav>

    </>
  );
}

export default Navbar;
