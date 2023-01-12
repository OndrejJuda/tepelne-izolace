import React from 'react';
import Link from 'next/link';

const CTAButton = ({ children }) => {
  return (
    <Link
      href='#kontakty'
    >
      <span className='inline-block text-xl text-primary-50 bg-primary-700 
      py-4 px-8 rounded-full
      hover:bg-primary-300 hover:text-primary-900 transition
      shadow-lg hover:scale-105 hover:shadow-md active:scale-95 active:shadow-lg
      '>
        {children}
      </span>
    </Link>
  );
};

export default CTAButton;