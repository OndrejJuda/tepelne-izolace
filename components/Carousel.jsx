import React, { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Carousel({ slides }) {
    const [curr, setCurr] = useState(0); // Opraveno: inicializace stavu curr na 0
    const prev = () => {
        if (curr === 0) setCurr(slides.length - 1);
        else setCurr(curr - 1);
    }
    const next = () => {
        if (curr === slides.length - 1) setCurr(0);
        else setCurr(curr + 1);
    }

    return (
        <div className='overflow-hidden relative rounded-2xl'>

            <div className={`flex transition ease-out duration-500`} style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((s, index) => (
                    <img key={index} src={s} alt={`Slide ${index + 1}`} />
                ))}
            </div>

            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'><IoIosArrowBack size={30} /></button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'><IoIosArrowForward size={30} /></button>
            </div>

            <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
                {slides.map((s, i) => {
                    return (
                        <div onClick={() => { setCurr(i) }} key={"circle" + i} className={`rounded-full w-2 h-2 cursor-pointer ${i == curr ? "bg-white" : "bg-gray-500"}`}></div>
                    );
                })}
            </div>
        </div>
    );
}
