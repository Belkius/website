import React from 'react';

function About() {
  
  return (
    <>
      <div className="flex py-12 mx-16 md:mx-24 lg:mx-48 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
        <div className="w-[100%] lg:order-2 bg-[#1A1A1A] bg-opacity-80 ">
          <p className="font-primary text-white text-2xl pt-4 px-4 font-semibold">
            Who am I?
          </p>
          <p className="text-lg text-white p-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse malesuada, justo at convallis posuere, neque erat congue quam, id hendrerit dolor odio eget quam. 
            Aenean ut hendrerit nulla. 
            Donec interdum, mauris sit amet sollicitudin consectetur, lectus mi lobortis nisi, ac congue velit sapien vel ex. 
            Fusce faucibus libero ac velit finibus, eget commodo tortor malesuada. Proin malesuada commodo purus in elementum. 
            Sed sed sagittis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Sed at velit quis tellus bibendum consectetur. 
            Duis dictum, mauris non luctus bibendum, odio diam tincidunt ex, ac gravida dolor enim ut nulla. Nulla facilisi. 
            Nunc ac nulla nibh. Vivamus ac imperdiet elit.
          </p>
        </div>

        <div className="lg:order-1">
          <img alt="Creators photograph" src="portfolio_1.gif" className="opacity-60 object-none border-4 border-[#22d3ee] rounded-2xl"/>
        </div>
      </div>
    </>
  );
}

export default About;
