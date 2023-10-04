import React from 'react';
import { HSecondary, SectionWrapper, CTAButton } from '.';
import Link from 'next/link';

const Offer = () => {
  return (
    <SectionWrapper
      id='sluzby'
      innerDivStyle='flex flex-col justify-center items-center bg-white rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen my-32 md:my-32 relative'
    >
      <div className="flex flex-col md:flex-row w-full justify-center items-center mb-6 ">
        <div className="md:w-2/4 p-4 md:border-r-2 border-gray-400">
          <p className="text-center text-4xl mb-6">Zateplení stropu, střechy, fasády: Pro rodinné domy</p>
          <p className="text-center text-lg mb-6">Přeměňte svůj dům v energeticky šetrnou oázu s top zateplením stropu, střechy nebo fasády. Komfort a úspora energie čeká!</p>
        </div>
        <div className="sm:flex-1 flex flex-col p-4 text-center items-center w-3/4">
          <Link href="/zatepleni" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg bg-primary-50 h-24 text-black rounded-md hover:text-black group hover:bg-gray- sm:w-3/4">
            <span className="absolute left-0 block w-full h-0 transition-all bg-primary-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative text-xl">Zateplení</span>
          </Link>

        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row w-full justify-center items-center mb-6">
        <div className="md:w-2/4 p-4 md:border-r-2 border-gray-400">
          <p className="text-center text-4xl mb-6">Tepelná čer+padla: Inovativní řešení pro váš domov</p>
          <p className="text-center text-lg mb-6">Zajistěte si úsporné a ekologické vytápění díky moderním tepelným čerpadlům. Výkon, úspora a dlouhodobá spolehlivost.</p>
        </div>
        <div className="md:flex-1 md:flex flex-col p-4 text-center mt-6 items-center">
          <div className="mb-4 bg-gray-200 p-4 rounded 1/2 md:md:w-64">Tepelná čerpadla</div>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row w-full justify-center items-center my-2">
        <div className="md:w-2/4 p-4 md:border-r-2 border-gray-400">
          <p className="text-center text-4xl mb-6">Solární ohřev vody: Přírodní cesta k teplé vodě</p>
          <p className="text-center text-lg mb-6">Využijte energii slunce pro ohřev vody. Moderní, ekologické řešení pro každodenní potřeby vašeho domova.</p>
        </div>
        <div className="md:flex-1 md:flex flex-col p-4 text-center mt-6 items-center ">
          <Link href="https://www.damepanely.cz/" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg  bg-primary-50 h-24 text-black  rounded-md hover:text-black group hover:bg-gray-50 md:w-3/4">
            <span className="absolute left-0 block w-full h-0 transition-all bg-primary-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative text-xl">Solární ohřev vody</span>
          </Link>

        </div>

      </div>
    </SectionWrapper>





  );
};

export default Offer;
