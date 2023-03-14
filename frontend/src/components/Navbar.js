import React, {ReactDOM, useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'


import Sort from "./Sort";
import Home from './Home';



function Navbar() {
  const [menu, setMenu] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  
  const handleLinkClick = event => {
    setActiveLink(event.target.pathname)
  }

   
  const mouseBg = useRef(null)

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event

    mouseBg.current.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      }, { duration: 12000, fill: 'forwards' }
    )
  };

  useEffect(() => {
    window.addEventListener('pointermove', handleMouseMove)
  }, [])

  return (
    <>
        <div >
          <div className="absolute hidden lg:block blur-3xl opacity-30 bg-gradient-to-r from-[#C4344F] to-[#22d3ee] h-[1000px] w-[1000px] left-1/2 top-1/2 rounded-full"   
            ref={mouseBg} 
            style={{zIndex: -1, animation: 'rotation 10s infinite linear', transform: 'translate(-50%, -50%)' }} 
            onPointerMove={handleMouseMove}>
          </div>
        </div>

        <nav>
          <div className="flex items-center justify-between px-4 py-2 ">
              <a href="/" className="no-underline flex items-center mx-2 md:mx-10 p-3 px-4">
                  <img src="logo192.png" className="mr-3 h-9" alt="Logo" />
                  <span className="text-2xl text-white font-semibold">Belkius</span>
              </a>
          <div className="hidden md:flex p-4 border border-none rounded-lg bg-transparent text-sm font-medium" id="navbar-pc">
            <NavLink exact to="/" onClick={handleLinkClick} className={`px-3 py-2 text-[#fffffe]  hover:text-[#22d3ee] ${activeLink === '/' ? 'bg-[#22d3ee] hover:text-[#fffffe]' : ''}`}>
              Projects
            </NavLink>
            <NavLink exact to="/about" onClick={handleLinkClick} className={`px-3 py-2 text-[#fffffe]  hover:text-[#c4344f] ${activeLink === '/about' ? 'bg-[#c4344f] hover:text-[#fffffe]' : ''}`}>
              About Me
            </NavLink>
            <NavLink to="/skills" onClick={handleLinkClick} className={`px-3 py-2 text-[#fffffe]  hover:text-[#22d3ee] ${activeLink === '/skills' ? 'bg-[#22d3ee] hover:text-[#fffffe]' : ''}`}>
              Skills
            </NavLink>
            <NavLink to="/info" onClick={handleLinkClick} className={`px-3 py-2 text-[#fffffe]  hover:text-[#c4344f] ${activeLink === '/info' ? 'bg-[#C4344F] hover:text-[#fffffe]' : ''}`}>
              Website Info
            </NavLink>
            <NavLink to="/contact" onClick={handleLinkClick} className={`px-3 py-2 text-[#fffffe]  hover:text-[#22d3ee] ${activeLink === '/contact' ? 'bg-[#22d3ee] hover:text-[#fffffe]' : ''}`}>
              Contact
            </NavLink>
          </div>
            
            <button type="button" className="block md:hidden text-white hover:text-[#22d3ee] focus:text-[#22d3ee] focus:outline-none" onClick={() => setMenu(!menu)}>
            <svg viewBox="0 0 20 20" className="w-10 h-10 fill-current">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
            </svg>
            </button>
          </div>
          <div className={`${menu ? 'block' : 'hidden'} md:hidden w-auto px-6 py-1`}>
              <a href="/" className="no-underline text-left block px-10 py-2 hover:border-2 text-xl font-semibold text-white hover:text-[#22d3ee]">Projects</a>
              <a href="#" className="no-underline text-left block px-10 py-2 hover:border-2 text-xl font-semibold text-[#d5f7fc] hover:text-[#C4344F]">About Me</a>
              <a href="#" className="no-underline text-left block px-10 py-2 hover:border-2 text-xl font-semibold text-[#8ee9f6] hover:text-[#22d3ee]">Skills</a>
              <a href="#" className="no-underline text-left block px-10 py-2 hover:border-2 text-xl font-semibold text-[#69e1f3] hover:text-[#C4344F]">Website Info</a>
              <a href="#" className="no-underline text-left block px-10 py-2 hover:border-2 text-xl font-semibold text-[#22d3ee] hover:text-[#22d3ee]">Contact</a>
          </div>
        </nav>

    </>
  );
}

export default Navbar;
  
  
  
  
  
