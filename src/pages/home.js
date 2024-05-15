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

      <Image src={jenny} alt="Profile" className="w-3/5 h-3/5 z-0 pt-12" />
      <div className='h-full w-full bg-gray-150 flex justify-center'>
          <Image src={img} alt="img" className="w-3/5 h-full z-0 pt-12" />
      </div>
      <div className='h-52 w-full bg-gray-150'/>
      
    </div>
  );
}

