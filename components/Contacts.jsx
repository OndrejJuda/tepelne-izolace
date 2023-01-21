import React from 'react';
import { Form, HSecondary } from './';

const Contacts = () => {
  return (
    <section
      id='kontakty'
      className='flex justify-center py-16 lg:py-36 xl:my-48'
    >
      <div className='bg-primary-50 lg:flex my-8 md:my-36 mx-8 rounded-lg overflow-hidden shadow-xl'>
        <img
          src='/business/smiling-businessman.jpg'
          alt='smiling businessman'
          className='w-full h-[400px] lg:h-auto lg:w-[400px] object-cover'
        />
        <div className='rounded-xl p-8 2xl:px-36 lg:py-24 '>
          <HSecondary additionalStyling='mb-8 lg:mb-16 text-4xl lg:text-5xl'>Domluvte si s námi schůzku</HSecondary>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contacts;