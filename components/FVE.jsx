import React from 'react';
import { CTAButton, HSecondary, SectionWrapper } from '.';

const FVE = () => {
  return (
    <SectionWrapper
      id='fve'
      innerDivStyle=''
    >
      <div className='mx-8 md:mx-16 lg:mx-36 bg-primary-50 rounded-lg overflow-hidden shadow-xl 2xl:flex relative'>
        <div className='p-8 lg:p-20 relative z-10'>
          <div className='mb-10'>
            <HSecondary additionalStyling='text-3xl sm:text-5xl mb-10 text-center'>
              Solarní ohřev vody
            </HSecondary>
          </div>
        </div>
      </div>
    </SectionWrapper >
  );
};

export default FVE;