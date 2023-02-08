import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className='flex justify-start items-center py-8 bg-secondary-600 -mb-[4px] px-8 md:px-16 lg:px-36'
    >
      <div className='h-auto lg:h-[50px] 3xl:h-auto'>
        <div className='block lg:hidden 3xl:block'>
          <Link href='/'>
            <img src='/logo/logo-name.svg' alt='logo' className='w-[300px]' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;