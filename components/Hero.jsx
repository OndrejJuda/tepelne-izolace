import React from 'react';
import { CTAButton } from './';

const Hero = () => {
  return (
    <section className='flex flex-col items-center bg-primary-50 py-16 lg:py-40 md:clip-hero overflow-hidden relative'>
      <img
        src='/logo/logo-one-color.svg'
        alt='logo'
        className='absolute top-[600px] -right-44 md:right-32 md:top-64 opacity-50 scale-125'
      />
      <div className='flex flex-col justify-center items-center lg:items-start p-6 sm:px-12 min-h-[calc(100vh-155px)] md:h-auto relative'>

        <h1 className='text-5xl md:text-6xl font-bold text-primary-600 mb-16'>
          Tepelné izolace snadno a rychle
        </h1>

        <p className='text-3xl md:text-4xl text-primary-500 max-w-[1200px] mb-24'>
          Culpa duis excepteur eiusmod nulla elit aute Lorem nulla ex officia aute exercitation culpa reprehenderit.
        </p>

        <CTAButton>Nezávazná poptávka</CTAButton>
      </div>

    </section>
  );
};

export default Hero;