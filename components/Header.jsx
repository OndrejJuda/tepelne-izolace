import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { id: '#kontakty', title: 'Kontakt' },
  { id: '#benefity', title: 'Proč nás?' },
  { id: '#služby', title: 'Služby' },
  { id: '#proces', title: 'Proces' },
  { id: '#reference', title: 'Reference' },
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
      className='flex justify-start items-center py-8'
    >
      <div className='ml-36'>
        <Link href='/'>
          <img src='/logo/logo-name.png' alt='logo' width={300} />
        </Link>
      </div>

      <div className={`fixed left-[50%] transition ${isOnTop ? '' : 'translate-x-[-40%]'}`}>
        <Link href='/'>
          <img
            src='/logo/logo.png'
            alt='logo'
            width={60}
            height={60}
            className={`absolute top-[1px] left-[10px] -z-10 transition-[200] ${isOnTop ? '' : 'delay-150 translate-x-[-150%]'}
          bg-[#fff] rounded-full p-2 shadow-lg`}
          />
        </Link>
        <nav className={`bg-[#fff] py-4 px-12 rounded-full shadow-lg`}>
          <ul className='flex justify-center items-center gap-14'>
            {
              links.map(({ id, title }) => (
                <li
                  key={id}
                  className='text-primary-500 text-xl font-semibold group relative overflow-hidden'
                >
                  <Link href={id}>
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