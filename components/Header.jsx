import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { href: '#kontakty', title: 'Nezávazná poptávka', cta: true },
  { href: '#benefity', title: 'Proč nás?' },
  { href: '#služby', title: 'Foukaná vata' },
  { href: '#proces', title: 'Proces' },
];

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      const { scrollY } = window;

      setIsOnTop(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className='flex justify-start items-center py-8 bg-primary-50'
    >
      <div className='mx-auto md:ml-16 xl:ml-36'>
        <Link href='/'>
          <img src='/logo/logo-name.png' alt='logo' width={300} />
        </Link>
      </div>

      <div className={`hidden xl:block fixed z-50 left-[50%] transition ${isOnTop ? '' : 'translate-x-[-40%]'}`}>
        <Link href='/'>
          <img
            src='/logo/logo.png'
            alt='logo'
            width={60}
            height={60}
            className={`absolute top-[1px] left-[10px] -z-10 
            rounded-full p-2 bg-[#fff]
            transition-[200] ${isOnTop ? '' : 'delay-150 translate-x-[-150%] shadow-lg'}
            hover:scale-110 hover:shadow-xl active:scale-95 active:shadow-md`}
          />
        </Link>
        <nav className={`bg-[#fff] py-4 px-12 rounded-full shadow-lg`}>
          <ul className='flex justify-center items-center gap-14'>
            {
              links.map(({ href, title, cta }) => (
                <li
                  key={href}
                  className={`${cta ? 'text-primary-700 font-bold' : 'text-primary-500'} text-xl font-semibold group relative overflow-hidden`}
                >
                  <Link href={href}>
                    {title}
                  </Link>
                  <div className='w-full h-[2px] bg-primary-500 -translate-x-[105%] group-hover:translate-x-0 transition' />
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;