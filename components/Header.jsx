import React from 'react';
import Link from 'next/link';



const Header = () => {
  return (
    <header
      className='flex justify-start items-center py-8 bg-secondary-600'
    >
      <div className='mx-auto md:ml-16 lg:ml-4 xl:ml-16 2xl:ml-36'>
        <Link href='/'>
          <img src='/logo/logo-name.svg' alt='logo' className='w-[150px] sm:w-[400px] lg:w-[320px] xl:w-[400px]' />
        </Link>
      </div>
    </header>
  );
};

export default Header;