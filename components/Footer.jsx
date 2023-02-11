import React from 'react';
import Link from 'next/link';
import configuration from '../conf';

const { email, phone, urlSubdomain } = configuration;

const Footer = () => {
  return (
    <footer className='flex flex-col gap-16 lg:flex-row lg:justify-between items-center
    px-8 sm:px-16 lg:px-36 py-16 2xl:py-36 bg-secondary-600 relative overflow-hidden'>
      <img
        src='/logo/logo-one-color.svg'
        alt='logo'
        className='absolute right-[50%] opacity-5 top-0 translate-x-[50%] scale-125'
      />

      <Link href='/'>
        <img src='/logo/nzulight-logo.png' width={120} alt='nzu light logo' />
      </Link>

      <Link href='/'>
        <img src='/logo/logo-name.svg' alt='logo' width={400} />
      </Link>

      <div className='z-10 text-primary-100 font-medium text-lg'>
        <p>LUNASTAV CZ s.r.o.</p>
        <p>IČO: 05591872</p>
        <a href={`mailto:${email}`} target='_blank' rel='noreferrer' className='block'>{email}</a>
        <a href={`tel:${phone.replaceAll(' ', '')}`} target='_blank' rel='noreferrer' className='block'>{phone}</a>
        <a href='http://www.lunastav.cz' target='_blank' rel='noopener noreferrer'>{urlSubdomain}</a>
      </div>
    </footer>
  );
};

export default Footer;