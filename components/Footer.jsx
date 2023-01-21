import React from 'react';
import Link from 'next/link';

const email = 'abc@example.com';
const tel = '+420 123 456 789';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-16 lg:flex-row items-center
    px-8  sm:px-16 md:px-36 py-16 md:py-32 bg-primary-50 relative overflow-hidden'>
      <img
        src='/logo/logo-one-color.svg'
        alt='logo'
        className='absolute right-[50%] opacity-50 2xl:opacity-100 top-0 translate-x-[50%] scale-125'
      />
      <Link href='/' className='lg:mr-auto z-10'>
        <img src='/logo/logo-name.png' alt='logo' width={300} />
      </Link>
      <div className='z-10 flex flex-col sm:flex-row gap-16 text-primary-500 font-medium text-lg'>
        <div>
          <p>LUNASTAV s.r.o.</p>
          <p>IČO: 00000000</p>
          <a href={`mailto:${email}`} target='_blank' rel='noreferrer' className='block'>{email}</a>
          <a href={`tel:${tel}`} target='_blank' rel='noreferrer' className='block'>{tel}</a>
        </div>
        <address>
          Sídlo:<br />
          LUNASTAV s.r.o. <br />
          Pražská 123/456 <br />
          123 56, Praha 1
        </address>
      </div>
    </footer>
  );
};

export default Footer;