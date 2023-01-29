import React from 'react';
import { CTAButton } from './';
import configuration from '../conf';

const { email, phone } = configuration;

const Hero = () => {
  return (
    <section className='flex flex-col items-center bg-primary-50 lg:clip-hero overflow-hidden relative'>
      <img
        src='/logo/logo-one-color.svg'
        alt='logo'
        className='absolute top-[600px] -right-44 md:right-32 md:top-64 opacity-50 scale-125'
      />
      <div className='flex flex-col justify-center items-center lg:items-start p-6 sm:px-12 min-h-[calc(100vh-110px)] sm:min-h-[calc(100vh-155px)] md:h-auto relative'>

        <h1 className='text-5xl md:text-6xl font-bold text-primary-600 mb-16'>
          Tepelné izolace snadno a rychle
        </h1>

        <p className='text-3xl md:text-4xl text-primary-500 max-w-[1200px] mb-24'>
          Culpa duis excepteur eiusmod nulla elit aute Lorem nulla ex officia aute exercitation culpa reprehenderit.
        </p>

        <div className='lg:hidden flex flex-col items-center gap-4 bg-white py-6 px-6 rounded-xl'>
          <a href={`mailto:${email}`} className='text-xl font-semibold text-primary-700'>{email}</a>
          <CTAButton>Nezávazná poptávka</CTAButton>
          <a href={`tel:${phone.replaceAll(' ', '')}`} className='text-xl font-semibold text-primary-700'>{phone}</a>
        </div>

        <div className='hidden lg:flex items-center gap-8 bg-white rounded-full pr-8'>
          <div className='scale-110'>
            <CTAButton>Nezávazná poptávka</CTAButton>
          </div>
          <a href={`mailto:${email}`} className='text-xl font-semibold text-primary-700'>{email}</a>
          <a href={`tel:${phone.replaceAll(' ', '')}`} className='text-xl font-semibold text-primary-700'>{phone}</a>
        </div>
      </div>

    </section>
  );
};

export default Hero;