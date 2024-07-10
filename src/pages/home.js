import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import jenny from '../assets/home/home1_cropped.png';
import home2 from '../assets/home/home2.png';
import home3 from '../assets/home/home3.png';
import home4 from '../assets/home/home4.png';
import home5 from '../assets/home/home5.png';
import home6 from '../assets/home/home6.png';

export default function Home() {


  return (
    <div className="text-white flex flex-col justify-center items-center overflow-hidden relative w-full min-h-screen">

      <div className="relative w-full h-full">
        <Image src={jenny} alt="home" />
        <Link href='/programs' className='w-20 h-7 sm:w-32 sm:h-12 md:w-40 md:h-12 lg:w-52 lg:h-16 rounded-3xl bg-yellow-300 absolute bottom-2 right-10 sm:bottom-8 sm:right-32 md:bottom-10 md:right-40 lg:bottom-28 lg:right-1/4 font-bold text-lg md:text-2xl flex items-center justify-center hover:scale-105 transition duration-300 ease-in-out'> 
        시작하기! 
        </Link>
      </div>

      <Image src={home2} alt='home2' className="w-full h-full"/>
      <Image src={home3} alt='home3' className="w-full h-full"/>
      <Image src={home4} alt='home4' className="w-full h-full"/>
      <Image src={home5} alt='home5' className="w-full h-full"/>
      <Image src={home6} alt='home6' className="w-full h-full"/>
      
    </div>
  );
}

