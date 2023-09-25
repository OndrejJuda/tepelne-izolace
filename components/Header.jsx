import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the React Icons

const links = [
  { href: '', title: 'Firma' },
  { href: '#sluzby', title: 'Služby' },
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
    <header className='sticky top-0 flex flex-col md:flex-row justify-between items-center py-6 bg-primary-50 -mb-[4px] px-6 md:px-16 lg:px-36 z-50 border-b border-solid'>
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
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden fixed top-0 right-0 w-full h-screen bg-primary-50 text-center'>
          <button
            className='w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center absolute top-8 right-8 hover:scale-110 transition-transform'
            onClick={toggleMobileMenu}
          >
            <FaTimes />
          </button>
          {/* Logo above the first link */}
          <div className='h-auto lg:h-[50px] flex justify-center 3xl:h-auto my-6 mx-8'>
            <Link href='/'>
              <img src='/logo/logo-name.png' alt='logo' className='w-[200px]' />
            </Link>
          </div>

          <div className='h-full flex flex-col text-lg items-center justify-start mt-8 md:mt-28'>
            {links.map((link, index) => (
              <div
                key={index}
                className='py-2 relative'
                onClick={closeMobileMenu}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverExit}
              >
                <div className='text-black hover:text-primary-500 '>
                  {link.title === 'Firma' || link.title === 'Služby' ? (
                    <div
                      className={`text-black  transition-transform ${hoveredLink === index ? 'open-submenu' : ''}`}
                    >
                      <div className="flex justify-center items-center pl-7 hover:text-primary-500">
                        {link.title}
                        <IoIosArrowDown className={`inline-block mx-2 transform transition-transform ${hoveredLink === index ? 'rotate-180 mt-0.5' : ''}`} />
                      </div>
                      {hoveredLink === index && (
                        <div
                          className='bg-white my-2 rounded-md'
                          onMouseEnter={() => handleHover(index)}
                          onMouseLeave={handleHoverExit}
                        >
                          {link.title === 'Služby' && (
                            <>
                              <Link href='/zatepleni-zatepleni-stropu' className="">
                                <div className="link-content h-12 text-center text-base py-3 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-tr-md rounded-tl-md">
                                  Zateplení stropu
                                </div>
                              </Link>

                              <Link href='/zatepleni-zatepleni-strechy'>
                                <div className="link-content h-12 text-center text-base  py-3 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black">
                                  Zateplení střechy
                                </div>
                              </Link>

                              <Link href='/zatepleni-zatepleni-fasady'>
                                <div className="link-content h-12 text-center text-base  py-3 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-none">
                                  Zateplení fasády
                                </div>
                              </Link>
                              <Link href='/fotovoltaika-solarni-ohrev-vody'>
                                <div className="link-content h-12 text-center text-base  py-3 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-br-md rounded-bl-md">
                                  Solární ohřev vody
                                </div>
                              </Link>
                            </>
                          )}
                          {link.title === 'Firma' && (
                            <>
                              <Link href='/#benefity'>
                                <div className="link-content text-base h-12 text-center py-3 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black  rounded-tr-md rounded-tl-md">
                                  Naše výhody
                                </div>
                              </Link>
                              <Link href='/#proces'>
                                <div className="link-content text-base h-12 text-center py-3 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-br-md rounded-bl-md">
                                  Náš proces
                                </div>
                              </Link>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={link.href}>
                      {/* Wrap the link in a div here */}
                      <div className='text-black hover:text-primary-500 hover:scale-110 transition-transform'>
                        <div className="link-content">
                          {link.title}
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
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
              className={`text-lg hover:text-primary-500 transition-transform cursor-pointer ${link.title === 'Zateplení' && hoveredLink === index ? 'open-submenu' : ''}`}
            >
              <Link href={link.href}>
                <div className="link-content flex items-center"> {/* Added flex container */}
                  {link.title} {link.title === 'Firma' || link.title === 'Služby' ? (
                    <span className={`inline-block ml-2 transform transition-transform ${hoveredLink === index ? 'rotate-180 mt-0.5' : ''}`}> {/* Adjusted margin-top */}
                      <IoIosArrowDown />
                    </span>
                  ) : null}
                </div>
              </Link>
            </div>
            {hoveredLink === index && (link.title === 'Firma' || link.title === 'Služby') && (
              <div className='absolute top-full left-0 mt-4 bg-white text-center rounded-md w-[150px] h-auto  '>
                {link.title === 'Služby' && (
                  <>
                    <Link href='/zatepleni-zatepleni-stropu' className="">
                      <div className="link-content h-13 text-center  text-sm  py-4 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-tr-md rounded-tl-md">
                        Zateplení stropu
                      </div>
                    </Link>

                    <Link href='/zatepleni-zatepleni-strechy'>
                      <div className="link-content h-13 text-center text-sm  py-4 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-none">
                        Zateplení střechy
                      </div>
                    </Link>

                    <Link href='/zatepleni-zatepleni-fasady'>
                      <div className="link-content h-13 text-center text-sm  py-4 hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-none">
                        Zateplení fasády
                      </div>
                    </Link>
                    <Link href="https://www.damepanely.cz">
                      <div className="link-content h-13 text-center py-4 text-sm  hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-br-md rounded-bl-md">
                        Solární ohřev vody
                      </div>
                    </Link>
                  </>
                )}
                {link.title === 'Firma' && (
                  <>
                    <Link href="/#benefity">
                      <div className="link-content h-13 text-center py-4 text-sm  hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-tr-md rounded-tl-md">
                        Naše výhody
                      </div>
                    </Link>
                    <Link href="/#proces">
                      <div className="link-content h-13 text-center py-4 text-sm  hover:bg-primary-200 hover:bg-opacity-50 hover:text-black rounded-br-md rounded-bl-md">
                        Proces
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
      <div className='hidden btn rounded-full md:block bg-primary-400 text-black py-2 text-center text-base font-bold mx-2 px-4 hover:text-white hover:scale-110 transition-transform'>
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
``