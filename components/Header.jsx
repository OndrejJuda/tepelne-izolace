import React from 'react';
import Link from 'next/link';



const Header = () => {
  return (
    <header
      className='flex justify-start items-center py-8 bg-primary-50'
    >
      <div className='mx-auto md:ml-16 lg:ml-4 xl:ml-36'>
        <Link href='/'>
          <img src='/logo/logo-name.png' alt='logo' className='w-[150px] sm:w-[300px]' />
        </Link>
      </div>
    </header>
  );
};

export default Header;