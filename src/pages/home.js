import React from 'react';
import Image from 'next/image';
import jenny from '../assets/home.png';
import jennyMobile from '../assets/jenny-mobile.png';
import img from '../assets/00.jpg';

export default function Home() {


  return (
    <div className="text-white flex flex-col justify-center items-center overflow-hidden relative w-full min-h-screen" 
      style={{ 
      // backgroundImage: `url(${background})`,
      // backgroundSize: 'cover', 
      // backgroundRepeat: 'no-repeat', 
      // backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 flex justify-between items-center">
        
        {/* right side of me image */}
        {/* <div className="z-50 pt-12 flex flex-col space-y-2 text-xs -mr-72 sm:-mr-60 md:-mr-52 lg:-mr-40 sm:text-xs md:text-sm lg:text-base md:space-y-3 lg:space-y-5 md:pb-48">
          <div className='w-1/4 space-y-2 sm:w-1/3 md:w-1/2'>
            <h1 className="font-bold">ABOUT ME</h1>
            <p className="text-gray-300 max-w-full"> I'm a student at <span className="text-white">Emory University</span> studying <span className="text-white">CS, Data Science,</span> and <span className='text-white'>Pre-Law.</span></p>
          </div>

          <hr className="h-0.5 bg-gray-200 border-0 w-1/4 sm:w-1/3 md:w-1/2" />

          <div className='w-1/4 space-y-2 sm:w-1/3 md:w-1/2'>
            <h1 className="font-bold">PROJECTS</h1>
            <p className="text-gray-300"> Check out my recent projects directly through a macbook mockup I made! </p>
          </div>
        </div> */}
        
      </div>

      <Image src={jenny} alt="Profile" className="w-3/5 h-3/5 z-0 pt-12" />
      <Image src={img} alt="img" className="w-full h-full z-0 pt-12" />
    </div>
  );
}


