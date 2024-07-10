import React from "react";
import Image from 'next/image';
import Youtube from '../assets/youtube.png';
import Instagram from '../assets/instagram.png';
import NaverBlog from '../assets/naverBlog.png';

export default function Footer() {
    return (
        <div className="h-72 w-full bg-gray-600 text-white flex flex-row px-32 py-16 text-base">
            {/* left side with name and short bio */}
            <div className="flex flex-col space-y-8 w-1/2 h-full">
                <h1 className="text-3xl"> 제니구의 영어전담마크 </h1>
                <p> 당신을 위한 1:1 온라인 영어강의 </p>
                <div className="flex flex-col space-y-2">
                    <p className=""> 이메일: </p>
                    <p className=""> 전화번호: </p>
                </div>

            </div>
            {/* right side with socials */}
            <div className="flex flex-col space-y-6 w-1/2 h-full">
                <div>
                    <a href="https://www.youtube.com/@jenny9english" target="_blank" rel="noopener noreferrer" className="flex items-center flex-row space-x-4">
                        <Image src = {Youtube} alt = 'Youtube Icon' className="w-8 h-8"/>
                        <p className="transition duration-300 ease-in-out hover:text-pink-200"> 제니구의 영어전담마크 </p>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/jenny9_english" target="_blank" rel="noopener noreferrer" className="flex items-center flex-row space-x-4">
                        <Image src = {Instagram} alt = 'Instagram Icon' className="w-8 h-8"/>
                        <p className="transition duration-300 ease-in-out hover:text-pink-200"> jenny9_english </p>
                    </a>
                </div>
                <div>
                    <a href="https://blog.naver.com/needyous2" target="_blank" rel="noopener noreferrer" className="flex items-center flex-row space-x-4">
                        <Image src = {NaverBlog} alt = 'Naver Blog Icon' className="w-8 h-8"/>
                        <p className="transition duration-300 ease-in-out hover:text-pink-200"> 친절한 제니구 </p>
                    </a>
                </div>

            </div>
        </div>
    );
}