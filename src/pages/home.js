import React from 'react';
import Image from 'next/image';
import jenny from '../assets/home.png';
import jennyMobile from '../assets/jenny-mobile.png';
import img from '../assets/home_main_long.jpg';

export default function Home() {


  return (
    <div className="text-white flex flex-col justify-center items-center overflow-hidden relative w-full min-h-screen">

      <Image src={jenny} alt="Profile" className="w-3/5 h-3/5 z-0 pt-12" />

      <div className='h-full w-full bg-gray-150 flex justify-center'>
          <Image src={img} alt="img" className="w-3/5 h-full z-0 pt-12" />
      </div>

      {/* space to improve flow into footer */}
      <div className='h-52 w-full bg-gray-150'/>
      
    </div>
  );
}

