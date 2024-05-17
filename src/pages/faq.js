import React from 'react';

export default function faq() {

    const questions = [
        {question: '실시간 줌(Zoom) 레슨을 하시나요?', answer: '아니요. 하지만 카카오를 통해 빠른 피드백을 제공합니다.'},
        {question: '영상들이 유투브(YouTube)에 있는 동영상과 도같은 콘텐츠인가요?', answer: '아니요, ___, ___, ____ 등 여러 가지 이유로 매우 다릅니다.'},
        // add more as needed
    ];

    return (
        <div className='bg-gray-150 h-screen w-full'>
            <div className='flex flex-col space-y-36 w-full h-full  items-center justify-center'>
                {questions.map((question) => (
                    <div key = {question} className='shadow-2xl w-96 h-96 bg-white text-black rounded-xl p-4 flex flex-col space-y-4'>
                        <h1 className='text-2xl'> Q:{' '}{question.question} </h1>
                        <p className='text-lg'> A:{' '}{question.answer} </p>
                    </div>
                ))}
            </div>
        </div>

    );
}