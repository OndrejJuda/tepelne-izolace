import React from 'react';
import { Form, HSecondary } from './';

const Contacts = () => {
  return (
    <section
      id='kontakty'
      className='flex justify-center my-48'
    >
      <div className='bg-primary-50 flex mt-36 rounded-lg overflow-hidden'>
        <img
          src='/people/smiling-businessman.jpg'
          alt='smiling businessman'
          className='w-[500px] object-cover'
        />
        <div className='rounded-xl px-36 py-24 '>
          <HSecondary additionalStyling='mb-16'>Domluvte si s námi schůzku</HSecondary>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contacts;