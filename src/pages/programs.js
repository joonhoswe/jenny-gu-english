import React from 'react';
import Image from 'next/image';
import banner from '@assets/programs/banner.jpg'
import ImageGallery from "react-image-gallery";
import sample1 from "@assets/programs/sample1.png";
import sample2 from "@assets/programs/sample2.png";
import sample3 from "@assets/programs/sample3.png";
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Programs() {

    const images = [
        {
          original: sample1.src,
        },
        {
          original: sample2.src,
        },
        {
          original: sample3.src,
        },
      ];

    return (
        <div className='min-h-screen h-auto flex flex-col items-center'>
            <Image src={banner.src} alt='banner' layout="responsive" width={16} height={9}/>
            <iframe className='w-full h-[60vh]' src="https://www.youtube.com/embed/H2mogYDmMPs?autoplay=1&si=pIkr77biVv_pe65c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
            <div className='mt-12 w-full h-2/5 flex flex-col space-y-8 items-center justify-center py-20'>
                <h1 className='text-4xl font-bold'> 샘플 레슨 </h1>
                <ImageGallery items={images} showThumbnails={false} autoPlay={true}/>
            </div>
        </div>
    );
}