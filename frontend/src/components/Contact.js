import React, { useState, useEffect, useRef } from 'react'

function Contact() {
  const [education, setEducation] = useState(true)
  
  return (
    <>
      <div className="flex py-12 mx-10 md:mx-24 lg:mx-48 md:my-10 text-white text-xl justify-center items-center">
        <div className=" py-10 bg-[#1A1A1A] bg-opacity-80">
          <h1 className="w-full font-primary text-4xl text-[#22d3ee] text-center pb-8 font-semibold col-span-2 md:col-span-3">Get in touch!</h1>
          <div className="flex grid md:grid-cols-2 place-items-center gap-8">
            <p className="md:text-2xl font-bold text-justify p-4 md:col-span-2">Contact me directly and say hello</p>
            <p>
              <a className="text-[#22d3ee]" href="mailto:gbelkius@gmail.com">@</a>
              <a href="mailto:gbelkius@gmail.com">: gbelkius@gmail.com</a>
            </p>
            <p className="flex items-center">
            <svg class="text-[#22d3ee]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <a href="tel:535-398-046">: +48 535 398 046</a>
            </p>
            <p className="md:text-2xl font-bold text-justify p-4 md:col-span-2">You can also check out my code on GitHub:</p>
            <a href="https://github.com/Belkius" className="md:col-span-2">
              <img src={process.env.PUBLIC_URL + '/logos/github.svg'} className="h-16 w-16 object-contain"/>
            </a>
            <p className="md:text-2xl font-bold text-justify p-4 md:col-span-2">Or visit my LinkedIn profile:</p>
            <a href="https://www.linkedin.com/in/grzegorz-belkius-581337254/" className="md:col-span-2">
              <img src={process.env.PUBLIC_URL + '/logos/linkedin.png'} className="h-16 w-16 object-contain grayscale hover:grayscale-0"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
