import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Form, HSecondary, SectionWrapper } from './';

const DemandFormSection = () => {
  const width = useWindowWidth();

  return (
    <SectionWrapper
      id={width > 1024 ? 'kontakty' : ''}
      innerDivStyle='bg-secondary-600 lg:flex mx-8 rounded-lg overflow-hidden shadow-xl'
    >
      <img
        src='/business/house.jpg'
        alt='house'
        className='w-full h-[400px] lg:h-auto lg:w-[400px] object-cover'
      />

      <div
        id={width > 1024 ? '' : 'kontakty'}
        className='rounded-xl p-6 sm:p-8 2xl:px-36 lg:py-8'
      >
        <HSecondary additionalStyling='mb-8 lg:mb-16 text-4xl lg:text-5xl'>Domluvte si s námi schůzku</HSecondary>
        <Form />
      </div>

    </SectionWrapper>
  );
};

export default DemandFormSection;