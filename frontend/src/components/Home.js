import React from 'react';

function Home() {
  
  return (
    <>
      <div>
        <h1 className="font-primary font-semibold text-4xl lg:text-5xl text-center text-white mt-6 md:mt-16 md:py-6">Some of my projects</h1>
      </div>
          
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
        
        <a className="group no-underline h-120 w-72 mx-auto bg-[#1A1A1A] bg-opacity-80 transition duration-500 md:hover:scale-125" href="/sort">
          <div className="h-72 relative">
            <img alt="SORTING" src="sort.jpg" className="object-fill h-72 w-72"/>
          </div>
          <div className="h-56 relative ">
            <div className="font-primary text-white group-hover:text-[#C4344F] text-2xl pt-4 px-4 font-semibold">
              Sorting visualizer
            </div>
            <div className="text-lg text-white p-4 group-hover:text-[#C4344F] font-light text-justify">
              Eight popular sorting algorithms implemented with a simple visualization showcasing how they work.
            </div>
          </div>
        </a>


        <a className="group no-underline h-120 w-72 mx-auto bg-[#1A1A1A] bg-opacity-80 transition duration-500 md:hover:scale-125" href="/dart">
          <div className="h-72 border-b-4 border-black relative">
            <img alt="DART" src="dart.jpg" className="object-fill h-72 w-72"/>
          </div>
          <div className="h-56 relative ">
            <div className="font-primary text-white group-hover:text-[#22d3ee] text-2xl pt-4 px-4 font-semibold">
              Dart scoreboard
            </div>
            <div className="text-lg text-white p-4 group-hover:text-[#22d3ee] font-light text-justify">
              An easy way to keep track of your score in a game of dart with friends!
            </div>
          </div>
        </a>

      
        <a className="group no-underline h-120 w-72 mx-auto bg-[#1A1A1A] bg-opacity-80 transition duration-500 md:hover:scale-125" href="/repcounter">
          <div className="h-72 border-b-4 border-black relative">
           <img alt="PULL UP" src="pull_up.jpg" className="object-fill h-72 w-72"/> 
          </div>
          <div className="h-56 relative ">
            <div className="font-primary text-white group-hover:text-[#C4344F] text-2xl pt-4 px-4 font-semibold">
              AI pull up counter
            </div>
            <div className="text-lg text-white p-4 group-hover:text-[#C4344F] font-light text-justify">
              Count pull up repetitions during your exercise, using data from your webcam and a TensorFlow pose detection model.
            </div>
          </div>
        </a>
        
      </div>
    </>
  );
}

export default Home;
