import React from 'react';
import { CTAButton } from './';

const Hero = () => {
  return (
    <section className='flex flex-col items-center py-40'>
      <div
        className='absolute top-0 left-0 w-screen -z-10 bg-primary-50 h-[85vh]'
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)' }}
      >
        <div className='relative'>
          <img
            src='/logo-one-color.svg'
            alt='logo'
            className='absolute right-32 top-64 scale-125'
          />
        </div>
      </div>
      <div>
        <h1 className='text-6xl font-bold text-primary-600 mb-16'>
          Doma teplo, na duši klid
        </h1>

        <p className='text-4xl text-primary-500 max-w-[1200px] mb-24'>
          Culpa duis excepteur eiusmod nulla elit aute Lorem nulla ex officia aute exercitation culpa reprehenderit.
        </p>

        <CTAButton>Nezávazná poptávka</CTAButton>
      </div>

    </section>
  );
};

export default Hero;