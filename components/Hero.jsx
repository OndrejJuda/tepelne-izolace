import React from 'react';
import Link from 'next/link';
import { CTAButton } from './';
import configuration from '../conf';

const { email, phone } = configuration;

const Hero = () => {
  return (
    <section className='flex flex-col items-center bg-secondary-600 2xl:clip-hero overflow-hidden relative px-8 md:px-16 lg:px-36 pb-8'>
      <img
        src='/logo/logo-one-color.svg'
        alt='logo'
        className='absolute top-[600px] -right-44 md:right-32 md:top-64 opacity-5 scale-125'
      />
      <div className='flex flex-col justify-center items-center lg:items-start min-h-[calc(100vh-110px)] sm:min-h-[calc(100vh-155px)] md:h-auto relative pb-8'>
        <div className='hidden lg:block 3xl:hidden mb-4'>
          <Link href='/'>
            <img src='/logo/logo-name.svg' alt='logo' className='w-[300px]' />
          </Link>
        </div>

        <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-primary-200 mb-8 sm:mb-16'>
          Zateplujeme domy pomocí foukané izolace bez i s podporou dotace NZÚ Light s příspěvkem až 100%.
        </h1>

        <p className='text-xl sm:text-3xl md:text-4xl text-primary-100 max-w-[1200px] mb-1'>
          U rodinných domů je instalace hotová zpravidla během jednoho dne.
        </p>
        <p className='text-xl sm:text-3xl md:text-4xl text-primary-100 max-w-[1200px] mb-1'>
          Pokud pobíráte důchod, tak může dotace pokrýt až 100% z ceny realizace.
        </p>
        <p className='text-xl sm:text-3xl md:text-4xl text-primary-100 max-w-[1200px] mb-12'>
          Dotaci je možné čerpat i před instalací a vyřídíme ji za Vás.
        </p>

        <div className='lg:hidden flex flex-col items-center gap-4 bg-secondary-400 py-6 px-6 rounded-xl'>
          <a href={`mailto:${email}`} className='text-xl font-semibold text-primary-100'>{email}</a>
          <CTAButton>Nezávazná poptávka</CTAButton>
          <a href={`tel:${phone.replaceAll(' ', '')}`} className='text-xl font-semibold text-primary-100'>{phone}</a>
        </div>

        <div className='hidden lg:flex items-center gap-8 bg-secondary-400 rounded-xl pr-8'>
          <div className='scale-110'>
            <CTAButton>Nezávazná poptávka</CTAButton>
          </div>
          <a href={`mailto:${email}`} className='text-xl font-semibold text-primary-100'>{email}</a>
          <a href={`tel:${phone.replaceAll(' ', '')}`} className='text-xl font-semibold text-primary-100'>{phone}</a>
        </div>
      </div>

    </section>
  );
};

export default Hero;