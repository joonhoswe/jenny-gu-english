import { React, useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export default function Videos() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div className='bg-gray-150 h-[90vh] w-full flex items-center justify-center p-4'>
            <div className='flex flex-col w-full h-full p-8 bg-white rounded-lg text-black'>
                <h1 className='font-bold text-4xl'> 강의 라이브러리 </h1>
                {isAuthenticated ? (
                <div className='flex flex-col space-y-8 w-full px-12 mt-24'>
                    <div className='flex flex-row w-full p-4 rounded-2xl shadow-2xl'>
                        <img src='https://via.placeholder.com/300' alt='video1' className='h-48 w-48 rounded-lg'/>
                        <div className='px-4 '>
                            <h1 className='font-bold text-2xl'> 강의 1 </h1>
                        </div>
                    </div>
                </div>
                ) :
                <div className='flex items-center justify-center w-full h-full'>
                    <p className='text-4xl'> 로그인이 필요합니다. </p>
                </div>}

            </div>
        </div>
    )
}