import './Navbar.css';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [menu, setMenu] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const mouseBackground = useRef(null)
  
  const handleLinkClick = event => {
    setActiveLink(event.target.pathname)
  }

  const handleMouseMove = (event) => {
    let { clientX, clientY } = event
    if(clientX > window.innerWidth){clientX = window.innerWidth}
    if(clientY > window.innerHeight - 640){clientY = window.innerHeight - 640}

    mouseBackground.current.animate({
        left: `${clientX/2}px`,
        top: `${clientY/2}px`,
      }, { duration: 12000, fill: 'forwards' }
    )
  }

  useEffect(() => {
    window.addEventListener('pointermove', handleMouseMove)
  }, [])

  return (
    <>
        <div className='overflow-hidden'>
          <div className="absolute hidden overflow-hidden lg:block blur-3xl opacity-30 bg-gradient-to-r from-[#C4344F] to-[#22d3ee] h-[700px] w-[700px] left-1/2 top-1/2 rounded-full mouse-background"   
            ref={mouseBackground} 
            style={{zIndex: -1 }} 
            onPointerMove={handleMouseMove}>
          </div>
        </div>

        <nav>
          <div className="flex items-center justify-between px-4 py-2">
              <a href="/" className="no-underline flex items-center mx-2 md:mx-10 p-3 px-4">
                  <img src="mlokologo.png" className="mr-3 h-9" alt="Logo" />
                  <span className="text-2xl text-white font-semibold">Belkius</span>
              </a>
          <div className="hidden md:flex p-4 border border-none rounded-lg bg-transparent text-sm font-medium" id="navbar-pc">
            <NavLink exact to="/" onClick={handleLinkClick} className={`px-3 py-2 text-[#fdfefe]  hover:text-[#22d3ee] ${activeLink === '/' ? 'bg-[#22d3ee] hover:text-[#fffefe]' : ''}`}>
              Projects
            </NavLink>
            <NavLink exact to="/about" onClick={handleLinkClick} className={`px-3 py-2 text-[#fdfefe]  hover:text-[#c4344f] ${activeLink === '/about' ? 'bg-[#c4344f] hover:text-[#fffefe]' : ''}`}>
              About Me
            </NavLink>
            <NavLink to="/skills" onClick={handleLinkClick} className={`px-3 py-2 text-[#fdfefe]  hover:text-[#22d3ee] ${activeLink === '/skills' ? 'bg-[#22d3ee] hover:text-[#fffefe]' : ''}`}>
              Skills
            </NavLink>
            <NavLink to="/info" onClick={handleLinkClick} className={`px-3 py-2 text-[#fdfefe]  hover:text-[#c4344f] ${activeLink === '/info' ? 'bg-[#C4344F] hover:text-[#fffefe]' : ''}`}>
              Website Info
            </NavLink>
            <NavLink to="/contact" onClick={handleLinkClick} className={`px-3 py-2 text-[#fdfefe]  hover:text-[#22d3ee] ${activeLink === '/contact' ? 'bg-[#22d3ee] hover:text-[#fffefe]' : ''}`}>
              Contact
            </NavLink>
          </div>
            
            <button type="button" className="block md:hidden text-white hover:text-[#22d3ee] focus:text-[#22d3ee] focus:outline-none" onClick={() => setMenu(!menu)}>
            <svg viewBox="0 0 20 20" className="w-10 h-10 fill-current">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
            </svg>
            </button>
          </div>
          <div className={`${menu ? 'block' : 'hidden'} md:hidden w-auto px-6 py-1 no-underline text-left text-xl font-semibold`}>
              <a href="/" className="block px-10 py-2 hover:border-2 text-white">Projects</a>
              <a href="/" className="block px-10 py-2 hover:border-2 text-[#d5f7fc]">About Me</a>
              <a href="/" className="block px-10 py-2 hover:border-2 text-[#8ee9f6]">Skills</a>
              <a href="/" className="block px-10 py-2 hover:border-2 text-[#69e1f3]">Website Info</a>
              <a href="/" className="block px-10 py-2 hover:border-2 text-[#22d3ee]">Contact</a>
          </div>
        </nav>

    </>
  );
}

export default Navbar;
  
  
  
  
  
