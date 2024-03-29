import React, { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Form, HSecondary, SectionWrapper } from './';

const DemandFormSection = () => {
  const useWidth = useWindowWidth();
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    setWidth(useWidth);
  }, [useWidth]);

  return (
    <SectionWrapper
      id={(width ?? 0) > 1024 ? 'poptavka' : ''}
      innerDivStyle='my-32 md:my-32 bg-primary-50 lg:flex rounded-lg overflow-hidden shadow-xl mx-8 md:mx-16 lg:mx-36 w-full'
    >
      <img
        src='/business/house.png'
        alt='house'
        className='w-full h-[400px] lg:h-auto lg:w-[400px] object-cover'
      />

      <div
        id={(width ?? 0) > 1024 ? '' : 'poptavka'}
        className='xl:flex-1 rounded-xl p-6 sm:p-8 2xl:px-36 lg:py-6'
      >
        <HSecondary additionalStyling='mb-8 lg:text-3xl text-center'>
          Pošlete nám nezávaznou poptávku

        </HSecondary>
        <p>
          <span className='text-red-600 font-bold'>*</span> povinný údaj
        </p>
        <Form />
      </div>
    </SectionWrapper>
  );
};

export default DemandFormSection;