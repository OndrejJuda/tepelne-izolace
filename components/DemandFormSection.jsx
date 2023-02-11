import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Form, HSecondary, SectionWrapper } from './';

const DemandFormSection = () => {
  const width = useWindowWidth();

  return (
    <SectionWrapper
      id={width > 1024 ? 'poptavka' : ''}
      innerDivStyle='bg-secondary-600 lg:flex mx-8 rounded-lg overflow-hidden shadow-xl mx-8 md:mx-16 lg:mx-36 w-full'
    >
      <img
        src='/business/house.jpg'
        alt='house'
        className='w-full h-[400px] lg:h-auto lg:w-[400px] object-cover'
      />

      <div
        id={width > 1024 ? '' : 'poptavka'}
        className='xl:flex-1 rounded-xl p-6 sm:p-8 2xl:px-36 lg:py-6'
      >
        <HSecondary additionalStyling='mb-8 text-4xl lg:text-5xl'>Domluvte si s námi schůzku</HSecondary>
        <Form />
      </div>

    </SectionWrapper>
  );
};

export default DemandFormSection;