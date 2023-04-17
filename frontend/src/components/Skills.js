import React, { useState, useEffect, useRef } from 'react'

function Skills() {
  const [technologies, setTechnologies] = useState(true)
  const [education, setEducation] = useState(true)
  const [experience, setExperience] = useState(true)
  
  return (
    <>
      <div className="py-12 mx-16 md:mx-24 lg:mx-48 md:my-10 grid grid-cols-1 lg:grid-cols-2 place-content-center text-white gap-4">
        <div className={`${technologies ? 'h-full ' :  'h-16'} w-full bg-[#1A1A1A] bg-opacity-80 md:col-span-2`}>
          <button className="w-full font-primary text-2xl text-[#C4344F] text-left p-4 font-semibold col-span-2 md:col-span-3" onClick={() => setTechnologies(!technologies)}>
            Technologies 
            <a className='float-right'>
              &#10534; 
            </a>
          </button>
          <div className={`${technologies ? 'block' : 'hidden'} flex grid md:grid-cols-3 place-items-center`}>
            <div className="justify-center content-center	items-center	place-content-around place-items-center	 justify-items-center grid grid-cols-3 p-4 place-items-center gap-4">
              <p className="w-full font-primary text-2xl text-[#C4344F] text-center font-semibold col-span-3">
                Frontend
              </p>
              <img src={process.env.PUBLIC_URL + '/logos/react.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/JavaScript.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/HTML5.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/CSS3.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/Tailwind_CSS.png'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 p-4 place-items-center gap-4">
              <p className="w-full font-primary text-2xl text-[#C4344F] text-center font-semibold col-span-3 lg:col-span-4">
                Backend
              </p>
              <img src={process.env.PUBLIC_URL + '/logos/Python.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/numpy.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/tensorflow.png'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/scikit_learn.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/pandas.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/fastapi.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/C++.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
            </div>
            <div className="grid grid-cols-3 p-4 place-items-center gap-4">
              <p className="w-full font-primary text-2xl text-[#C4344F] text-center font-semibold col-span-3">
                DevOps
              </p>
              <img src={process.env.PUBLIC_URL + '/logos/docker.png'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/Git.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/github.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/MySQL.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
              <img src={process.env.PUBLIC_URL + '/logos/MongoDB.svg'} className="h-16 w-16 object-contain md:grayscale hover:grayscale-0"/>
            </div>
          </div>
        </div>

        <div className={`${education ? 'h-full ' :  'h-16'} w-full bg-[#1A1A1A] bg-opacity-80`}>
          <button className="w-full font-primary text-2xl text-[#22d3ee] text-left p-4 font-semibold col-span-2 md:col-span-3" onClick={() => setEducation(!education)}>
            Education & proficiencies
            <a className='float-right'>
              &#10534; 
            </a>
          </button>
          <div className={`${education ? 'block' : 'hidden'} grid p-4 grid-cols-1 md:grid-cols-3 gap-y-4`}>
            <p className="md:text-lg font-light underline underline-offset-2	text-justify">
              Sept 2014 - May 2018
            </p>
            <p className="md:text-lg font-light text-justify col-span-2">
              <a className="font-bold">
                Zespół Szkół Technicznych nr 1
                im. Stanisława Staszica w Rybniku
              </a>
              <br/>Profile: IT
              <br/>Title: Technician
            </p>
            <p className="md:text-lg font-light underline underline-offset-2	text-justify">
              Sept 2018 - Feb 2022
            </p>
            <p className="md:text-lg font-light text-justify col-span-2">
              <a className="font-bold">
                Państwowa Wyższa Szkoła Zawodowa w Raciborzu
              </a>
              <br/>Major: Automation and Robotics
              <br/>Specialization: Industrial Automation
              <br/>Title: Engineer
            </p>
            <p className="md:text-lg font-light underline underline-offset-2	text-justify">
              Languages
            </p>
            <p className="md:text-lg font-light text-justify col-span-2">
              Polish - Native
              <br/>English - Proficient
            </p>
            <p className="md:text-lg font-light underline underline-offset-2	text-justify">
              Other
            </p>
            <p className="md:text-lg font-light text-justify col-span-2">
              Drivers License
            </p>
          </div>
        </div>

        <div className={`${experience ? 'h-full ' :  'h-16'} w-full bg-[#1A1A1A] bg-opacity-80`}>
          <button className="w-full font-primary text-2xl text-[#C4344F] text-left p-4 font-semibold col-span-2 md:col-span-3" onClick={() => setExperience(!experience)}>
            Experience
            <a className='float-right'>
              &#10534; 
            </a>
          </button>
          <div className={`${experience ? 'block' : 'hidden'} grid p-4 grid-cols-1 md:grid-cols-3 gap-y-4`}>
            <p className="md:text-lg font-light underline underline-offset-2	text-justify">
              27 July - 21 Aug 2020
            </p>
            <p className="md:text-lg font-light text-justify col-span-2">
              <a className="font-bold">
                Sunex Sp. z o.o. - intern
              </a>
              <br/>- preparation of CNC projects;
              <br/>- automation of industrial processes;
              <br/>- programming Fanuc industrial robots;
            </p>
            <p className="md:text-lg font-light underline underline-offset-2	text-justify">
              02 Jan - 31 Mar
            </p>
            <p className="md:text-lg font-light text-justify col-span-2">
              <a className="font-bold">
                An-Kop Sp. z o.o. - automation specialist
              </a>
              <br/>- PLC programming with the use of TIA Portal for Siemens controllers and Automation Studio for B&R controllers;
              <br/>- preparation of industrial automation projects;
              <br/>- setup and programming of Fanuc and ABB industrial robots;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;