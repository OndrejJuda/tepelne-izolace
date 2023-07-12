import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HiOutlineMenu } from 'react-icons/hi';

const links = [
  { href: '#poptavka', title: 'Nezávazná poptávka', cta: true },
  { href: '#sluzby', title: 'Foukaná izolace' },
  { href: '#benefity', title: 'Proč nás?' },
  { href: '#fve', title: 'FVE' },
  { href: '#galerie', title: 'Galerie' },
  { href: '/dotace', title: 'Dotace' },
  { href: '/kontakty', title: 'Kontakty' },
];

const Navbar = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const previousYScroll = useRef();

  useEffect(() => {
    const handleScroll = (event) => {
      const { scrollY } = window;

      setIsOnTop(scrollY < 100);

      const diffY = previousYScroll.current - scrollY
      previousYScroll.current = scrollY;

      if (scrollY < 200) {
        setIsVisible(true);
      }
      else if (diffY > 0) { // scrolling upwards
        setIsVisible(true);
      } else if (diffY < 0) { // scrolling downwards
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const showButton = () => {
    if (isOpen) return true;

    return isVisible;
  };

  return (
    <>
      <div className={`hidden lg:flex justify-end mr-4 xl:mr-8 sticky top-[2.25rem] 2xl:top-12 -mt-16 z-50
          transition ${isOnTop ? '' : 'translate-x-[-2%] xl:translate-x-[-3%] 2xl:translate-x-[-4%]'}`}>
        <nav className={`bg-primary-25 py-4 px-12 lg:px-6 xl:px-12 rounded-full shadow-lg relative`}>
          <Link href='/'>
            <img
              src='/logo/logo.svg'
              alt='logo'
              width={60}
              height={60}
              className={`absolute top-[1px] left-[10px] -z-10 
            rounded-full p-2 bg-primary-50
            transition-[200] ${isOnTop ? '' : 'delay-150 translate-x-[-150%] shadow-lg'}
            hover:scale-110 hover:shadow-xl active:scale-95 active:shadow-md`}
            />
          </Link>

          <ul className='flex justify-center items-center gap-8 lg:gap-4 xl:gap-8 2xl:gap-14'>
            {
              links.map(({ href, title, cta }) => (
                <li
                  key={href}
                  className={`${cta ? 'text-primary-800 font-bold' : 'text-primary-700'} text-xl lg:text-lg xl:text-xl font-semibold group relative overflow-hidden`}
                >
                  <Link href={href}>
                    {title}
                  </Link>
                  <div className='w-full h-[2px] bg-primary-700 -translate-x-[105%] group-hover:translate-x-0 transition' />
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

      <div className='w-screen flex justify-end lg:hidden fixed top-4 left-0 z-50'>

        <button className={`z-10 mr-4 transition ${showButton() ? '' : '-translate-y-[100px]'} shadow-lg bg-primary-25 rounded-full`}>
          <HiOutlineMenu
            size={54}
            className={`p-2 transition ${isOpen ? '' : 'rotate-180'} text-primary-700`}
            onClick={() => setIsOpen((prevValue) => !prevValue)}
          />
        </button>

        <nav
          className={`absolute -top-4 right-0 min-h-screen w-screen h-[500px] bg-primary-50 transition ${isOpen ? '' : 'translate-x-[100%]'} flex justify-center items-center short:items-start short:pt-8 overflow-auto`}
        >
          <ul className='flex flex-col justify-center items-center gap-8'>
            <Link href='/' onClick={() => { setIsOpen(false); setIsVisible(false); }}>
              <img src='/logo/logo-name.png' alt='logo' className='w-[250px]' />
            </Link>
            {
              links.map(({ href, title, cta }) => (
                <li
                  key={href}
                  className={`${cta ? 'text-primary-800 font-bold' : 'text-primary-700'} text-xl sm:text-2xl font-semibold group relative overflow-hidden`}
                >
                  <Link href={href} onClick={() => { setIsOpen(false); setIsVisible(false); }}>
                    {title}
                  </Link>
                  <div className='w-full h-[2px] bg-primary-500 -translate-x-[105%] group-hover:translate-x-0 transition' />
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;