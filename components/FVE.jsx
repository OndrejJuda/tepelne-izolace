import React from 'react';
import { CTAButtonArrowDP, HSecondary, SectionWrapper } from './';
import { BsArrowRight } from 'react-icons/bs';

const FVE = () => {
  return (
    <SectionWrapper id='fve' innerDivStyle=''>
      <div className='mx-8 md:mx-16 lg:mx-36 bg-primary-50 rounded-lg overflow-hidden shadow-xl'>
        <div className='md:flex'>
          <div className='w-full md:w-1/3 flex justify-center items-center'>
            <div className='w-full h-full aspect-w-4 aspect-h-3'>
              <img
                src='/business/barak_fotovoltaika.png'
                alt='house'
                className='object-cover object-center h-full w-full'
              />
            </div>
          </div>
          <div className='w-full md:w-2/3 flex flex-col justify-center items-center p-8'>
              <div>
                <HSecondary additionalStyling='text-3xl sm:text-5xl mb-10 font-bold text-center'>
                  Solární ohřev vody s dotací NZÚ
                </HSecondary>
              </div>
              <div className='my-4'>
                <HSecondary additionalStyling='text-3xl sm:text-4xl font-bold mb-4'>Přínosy solárního ohřevu vody</HSecondary>
              </div>
              <ul className='flex flex-col justify-center'>
                <li className='flex items-center j mb-2'>
                  <BsArrowRight className='mr-2' />
                  <strong>Snížení nákladů na ohřev vody a úspora energie.</strong>
                </li>
                <li className='flex items-center  mb-2'>
                  <BsArrowRight className='mr-2' />
                  <strong>Šetrnost k životnímu prostředí - snížení emisí skleníkových plynů.</strong>
                </li>
                <li className='flex items-center mb-2'>
                  <BsArrowRight className='mr-2' />
                  <strong>Zvýšení energetické nezávislosti a snížení závislosti na fosilních palivech.</strong>
                </li>
                <li className='flex items-center  mb-2'>
                  <BsArrowRight className='mr-2' />
                  <strong>Dlouhá životnost solárních kolektorů a nízké náklady na údržbu.</strong>
                </li>
                <li className='flex items-center  mb-8'>
                  <BsArrowRight className='mr-2' />
                  <strong>Podpora státních dotací a pobídek pro solární technologie.</strong>
                </li>
              </ul>
              <div className='text-center'>
                <h3 className='text-3xl font-bold mb-4 bg-green-400 p-2 rounded-lg'>Celá sestava po odečtení dotace stojí pouze 1Kč</h3>
              </div>
              <div className='flex justify-center'>
                <CTAButtonArrowDP>Zjistit více</CTAButtonArrowDP>
              </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FVE;
