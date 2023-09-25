import React from 'react';
import { HSecondary, SectionWrapper, CTAButton } from '.';
import Link from 'next/link';

const Offer = () => {
  return (
    <SectionWrapper
      id='sluzby'
      innerDivStyle='flex flex-col justify-center items-center bg-white rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen relative'
    >
      <div className="flex flex-col md:flex-row w-full justify-center items-center mb-6 ">
        <div className="md:w-2/4 p-4 md:border-r-2 border-gray-400">
          <p className="text-center text-4xl mb-6">Zateplení stropu, střechy, fasády: Pro rodinné domy</p>
          <p className="text-center text-lg mb-6">Přeměňte svůj dům v energeticky šetrnou oázu s top zateplením stropu, střechy nebo fasády. Komfort a úspora energie čeká!</p>
        </div>
        <div className="md:flex-1 md:flex flex-col p-4 text-center items-center ">
          <div className="mb-4 bg-gray-200 p-4 rounded h-20 md:w-3/4">Zateplení stropu</div>
          <div className=" bg-gray-200 p-4 rounded h-20  md:w-3/4">Zateplení střechy</div>
        </div>
        <div className="md:flex-1 md:flex flex-col p-4 text-center items-center">
          <div className="mb-4 bg-gray-200 p-4 rounded h-20  md:w-3/4">Zateplení fasády</div>
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
        <div className="md:flex-1 md:flex flex-col p-4 text-center mt-6 items-center">
          <div className="mb-4 bg-gray-200 p-4 rounded h-20 md:w-3/4">Solární ohřev vody</div>
        </div>
      </div>
    </SectionWrapper>





  );
};

export default Offer;
