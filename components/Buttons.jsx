import React from 'react';
import Link from 'next/link';

export const CTAButton = ({ children }) => {
  return (
    <Link
      href='/#poptavka'
      className='inline-block text-xl text-primary-900 font-semibold bg-primary-200 
      py-4 px-8 rounded-xl
      hover:bg-primary-400 transition
      shadow-lg hover:scale-105 hover:shadow-md active:scale-95 active:shadow-lg'
    >
      {children}
    </Link>
  );
};
export const CTAButtonArrowDP = ({ children }) => {
  return (
    <Link
      href='https://www.damepanely.cz'
      target='_blank'
      rel='noopener noreferrer'
      className='inline-block text-xl text-primary-900 font-semibold bg-primary-200 
      py-4 px-8 rounded-xl
      hover:bg-primary-400 transition
      shadow-lg hover:scale-105 hover:shadow-md active:scale-95 active:shadow-lg'
    >
      <div className="flex items-center">
        {children}
        <img src="/favicon/right-arrow.png" alt="Arrow" className="ml-2 w-4 h-4" />
      </div>
    </Link>
  );
};