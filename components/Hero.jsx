import React from 'react';
import Link from 'next/link';
import { CTAButton } from './';
import configuration from '../conf';

const { email, phone } = configuration;

const Hero = () => {
  return (
    <section className='flex flex-col items-center bg-primary-50 2xl:clip-hero overflow-hidden relative px-8 md:px-16 lg:px-36 pb-8'>
      <img
        src='/logo/logo-one-color.svg'
        alt='logo'
        className='absolute top-[600px] -right-44 md:right-32 md:top-64 opacity-5 scale-125'
      />
      <div className='w-full flex flex-col sm:justify-center lg:items-start min-h-[calc(100vh-110px)] sm:min-h-[calc(100vh-155px)] md:h-auto relative pb-8'>
        <div className='hidden lg:block 3xl:hidden mb-4'>
          <Link href='/'>
            <img src='/logo/logo-name.svg' alt='logo' className='w-[300px]' />
          </Link>
        </div>

        <h1 className='text-5xl sm:text-5xl md:text-6xl font-bold text-primary-900 mb-8 sm:mb-16'>
          Foukaná izolace s dotací od NZÚ
        </h1>

        <p className='text-2xl sm:text-3xl md:text-4xl text-primary-900 max-w-[1200px] mb-1'>
          Zateplete svůj dům minerální foukanou izolací s úsporou až 35%.
        </p>
        <p className='text-2xl sm:text-3xl md:text-4xl text-primary-900 max-w-[1200px] mb-1'>
          Vyřídíme Vám dotaci z programu NZÚ Light.
        </p>
        <p className='text-2xl sm:text-3xl md:text-4xl text-primary-900 max-w-[1200px] mb-12'>
          Dotaci je možné čerpat i před realizací.
        </p>

        <div className='lg:hidden flex flex-col items-center gap-4 bg-primary-100 shadow-sm py-6 px-6 rounded-xl'>
          <a href={`mailto:${email}`} className='text-xl font-semibold text-primary-900'>{email}</a>
          <CTAButton>Nezávazná poptávka</CTAButton>
          <a href={`tel:${phone.replaceAll(' ', '')}`} className='text-xl font-semibold text-primary-900'>{phone}</a>
        </div>

        <div className='hidden lg:flex items-center gap-8 bg-primary-100 shadow-sm rounded-xl pr-8'>
          <div className='scale-110'>
            <CTAButton>Nezávazná poptávka</CTAButton>
          </div>
          <a href={`mailto:${email}`} className='text-xl font-semibold text-primary-900'>{email}</a>
          <a href={`tel:${phone.replaceAll(' ', '')}`} className='text-xl font-semibold text-primary-900'>{phone}</a>
        </div>
      </div>

    </section>
  );
};

export default Hero;