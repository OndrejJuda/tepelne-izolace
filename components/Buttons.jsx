import React from 'react';
import Link from 'next/link';

export const CTAButton = ({ children }) => {
  return (
    <Link
      href='#kontakty'
      className='inline-block text-xl text-primary-80 bg-primary-100 
      py-4 px-8 rounded-xl
      hover:bg-primary-50 hover:text-primary-900 transition
      shadow-lg hover:scale-105 hover:shadow-md active:scale-95 active:shadow-lg'
    >
      {children}
    </Link>
  );
};