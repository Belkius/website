import React from 'react'

function About() {
  
  return (
    <>
      <div className="flex py-12 mx-16 md:mx-24 lg:mx-48 md:my-8 grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-4">
        <div className="w-[100%] lg:order-2 bg-[#1A1A1A] bg-opacity-80 ">
          <p className="font-primary text-white text-2xl pt-4 px-4 font-semibold">
            Who am I?
          </p>
          <p className="md:text-lg text-white p-4 font-light text-justify">
            Hi, my name is Greg Belkius. That's me in the picture (on the right). 
            I'm an automation and robotics engineer from Poland who is passionate about data science, AI, and programming in general.
            More recently, I have also been trying my hand at 3D animation to visualize some of the data I work with in the future.
            When I'm not sitting at the computer, I like to stay active by lifting weights at the gym or taking my dog for a walk.
            Besides that I enjoy playing all sorts of tabletop games and doing anything that sounds like fun.
          </p>
        </div>

        <div className="lg:order-1">
          <img alt="Creators photograph" src="portfolio.gif" className="opacity-60 object-none border-4 border-[#22d3ee] rounded-2xl"/>
        </div>
      </div>
    </>
  );
}

export default About;
