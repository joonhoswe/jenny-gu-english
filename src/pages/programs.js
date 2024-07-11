import React from 'react';
import Image from 'next/image';
import banner from '@assets/programs/banner.jpg'

export default function Programs() {
    return (
        <div className='min-h-screen h-auto flex flex-col items-center'>
            <Image src={banner.src} alt='banner' layout="responsive" width={16} height={9}/>
            <iframe className='w-full h-[60vh]' src="https://www.youtube.com/embed/H2mogYDmMPs?autoplay=1&si=pIkr77biVv_pe65c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
            <div className='mt-12 w-full h-2/5 flex items-center justify-center'>
                <h1 className='text-4xl font-bold'> 샘플 레슨 </h1>
                
            </div>
        </div>
    );
}