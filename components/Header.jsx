import React from 'react';
import Link from 'next/link';


// mx-auto md:ml-16 lg:ml-8 xl:ml-16 2xl:ml-36
const Header = () => {
  return (
    <header
      className='flex justify-start items-center py-8 bg-secondary-600 -mb-[4px] px-8 md:px-16 lg:px-36'
    >
      <div className=''>
        <Link href='/'>
          <img src='/logo/logo-name.svg' alt='logo' className='w-[200px]' />
        </Link>
      </div>
    </header>
  );
};

export default Header;