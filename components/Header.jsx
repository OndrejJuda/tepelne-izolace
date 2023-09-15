import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const links = [
  { href: '#sluzby', title: 'Zateplení' },
  { href: '#fve', title: 'Fotovoltaika' },
  { href: '#galerie', title: 'Galerie' },
  { href: '/dotace', title: 'Dotace' },
  { href: '/kontakty', title: 'Kontakt' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const submenuTimeoutRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleHover = (index) => {
    setHoveredLink(index);
    clearTimeout(submenuTimeoutRef.current);
  };

  const handleHoverExit = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setHoveredLink(null);
    }, 300); // Adjust the delay time (in milliseconds) as needed
  };

  return (
    <header className='sticky top-0 flex flex-col md:flex-row justify-between items-center py-6 bg-primary-50 -mb-[4px] px-6 md:px-16 lg:px-36 z-50'>
      <div className='mx-2'>
        <Link href='/'>
          <img src='/logo/logo-name.png' alt='logo' className='w-[200px] hover:scale-110 transition-transform' />
        </Link>
      </div>

      {/* Mobile hamburger menu button */}
      <div
        className='md:hidden w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center absolute top-8 right-8 hover:scale-110 transition-transform'
        onClick={toggleMobileMenu}
      >
        ☰
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden fixed top-2 left-0 w-full h-screen bg-primary-50 text-center'>
          {/* "X" button with adjusted positioning */}
          <button
            className='w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center absolute top-6 right-8 hover:scale-110 transition-transform'
            onClick={toggleMobileMenu}
          >
            ✕
          </button>

          {/* Logo above the first link */}
          <div className='h-auto lg:h-[50px] flex justify-center 3xl:h-auto my-4 mx-8'>
            <Link href='/'>
              <img src='/logo/logo-name.png' alt='logo' className='w-[200px]' />
            </Link>
          </div>

          <div className='h-full flex flex-col text-xl justify-start mt-8 md:mt-28 font-bold'>
            {links.map((link, index) => (
              <div
                key={index}
                className='py-2 relative'
                onClick={closeMobileMenu}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverExit}
              >
                {link.title === 'Zateplení' || link.title === 'Fotovoltaika' ? (
                  <div
                    className={`text-black hover:text-primary-500 transition-transform ${hoveredLink === index ? 'open-submenu' : ''}`}
                  >
                    <Link href={link.href}>
                      <div className="link-content flex items-center"> {/* Added flex container */}
                        {link.title} {link.title === 'Zateplení' || link.title === 'Fotovoltaika' ? (
                          <span className={`inline-block ml-2 transform transition-transform ${hoveredLink === index ? 'rotate-180 mt-0.5' : ''}`}> {/* Adjusted margin-top */}
                            <IoIosArrowDown />
                          </span>
                        ) : null}
                      </div>
                    </Link>
                    {hoveredLink === index && (
                      <div
                        className='pl-4'
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={handleHoverExit}
                      >
                        {link.title === 'Zateplení' && (
                          <>
                            <Link href='/#submenu1'>
                              <div className="link-content my-2 hover:bg-black">
                                Submenu 1 for Zateplení
                              </div>
                            </Link>
                            <Link href='/#submenu2'>
                              <div className="link-content my-2">
                                Submenu 2 for Zateplení
                              </div>
                            </Link>
                            <Link href='/#submenu3'>
                              <div className="link-content my-2">
                                Submenu 3 for Zateplení
                              </div>
                            </Link>
                          </>
                        )}
                        {link.title === 'Fotovoltaika' && (
                          <>
                            <Link href='/#submenu4'>
                              <div className="link-content">
                                Submenu 1 for Fotovoltaika
                              </div>
                            </Link>
                            <Link href='/#submenu5'>
                              <div className="link-content">
                                Submenu 2 for Fotovoltaika
                              </div>
                            </Link>
                            <Link href='/#submenu6'>
                              <div className="link-content">
                                Submenu 3 for Fotovoltaika
                              </div>
                            </Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href}>
                    <div className='text-black hover:text-primary-500 hover:scale-110 transition-transform'>
                      <div className="link-content">
                        {link.title}
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
            <div className='my-4 bg-primary-400 rounded-full py-2 text-center text-lg font-bold mx-2 px-4 hover:text-white hover:scale-110 transition-transform'>
              <Link href='/#poptavka' onClick={closeMobileMenu}>
                <div className="link-content">
                  📩 Nezávazná poptávka
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop menu */}
      <nav className='hidden md:flex space-x-6'>
        {links.map((link, index) => (
          <div
            key={index}
            className='relative'
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleHoverExit}
          >
            <div
              className={`text-xl font-bold hover:text-primary-500 transition-transform cursor-pointer ${link.title === 'Zateplení' && hoveredLink === index ? 'open-submenu' : ''}`}
            >
              <Link href={link.href}>
                <div className="link-content flex items-center"> {/* Added flex container */}
                  {link.title} {link.title === 'Zateplení' || link.title === 'Fotovoltaika' ? (
                    <span className={`inline-block ml-2 transform transition-transform ${hoveredLink === index ? 'rotate-180 mt-0.5' : ''}`}> {/* Adjusted margin-top */}
                      <IoIosArrowDown />
                    </span>
                  ) : null}
                </div>
              </Link>
            </div>
            {hoveredLink === index && (link.title === 'Zateplení' || link.title === 'Fotovoltaika') && (
              <div className='absolute top-full left-0 mt-4 bg-white text-center rounded-lg py-2'>
                {link.title === 'Zateplení' && (
                  <>
                    <Link href='/#zatepleni-stropu'>
                      <div className="link-content my-2 hover:bg-black">
                        Zateplení stropu
                      </div>
                    </Link>
                    <Link href='/#zatepleni-strechy'>
                      <div className="link-content my-2">
                        Zateplení střechy
                      </div>
                    </Link>
                    <Link href='/#zatepleni-fasady'>
                      <div className="link-content my-2">
                        Zateplení fasády
                      </div>
                    </Link>
                  </>
                )}
                {link.title === 'Fotovoltaika' && (
                  <>
                    <Link href='/#fotovoltaika1'>
                      <div className="link-content">
                        Fotovoltaika 1
                      </div>
                    </Link>
                    <Link href='/#fotovoltaika2'>
                      <div className="link-content">
                        Fotovoltaika 2
                      </div>
                    </Link>
                    <Link href='/#fotovoltaika3'>
                      <div className="link-content">
                        Fotovoltaika 3
                      </div>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Rounded div with phone number (Desktop version) */}
      <div className='hidden md:block bg-primary-400 text-black rounded-xl py-2 text-center text-lg font-bold mx-2 px-4 hover:text-white hover:scale-110 transition-transform'>
        <Link href='/#poptavka'>
          <div className="link-content">
            📩 Nezávazná poptávka
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
