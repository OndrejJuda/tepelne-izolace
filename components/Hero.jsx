import React from 'react';
import { CTAButton } from './';

const Hero = () => {
  return (
    <section className='flex flex-col items-center py-16 lg:py-40'>
      <div
        className='absolute top-0 left-0 w-full -z-10 bg-primary-50 h-screen md:h-[85vh] md:clip-hero overflow-hidden'
      >
        <div className='relative'>
          <img
            src='/logo/logo-one-color.svg'
            alt='logo'
            className='absolute top-[600px] -right-44 md:right-32 md:top-64 scale-125'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center lg:items-start p-6 sm:px-12 h-[calc(100vh-155px)] md:h-auto'>
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