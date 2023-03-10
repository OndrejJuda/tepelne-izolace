import React, { useState, useEffect, useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import { useWindowWidth } from '@react-hook/window-size';
import { Form, HSecondary, Map } from './';
import { MdAlternateEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import configuration from '../conf';

const { email, phone, phoneSekretarka } = configuration;

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(true);

  const width = useWindowWidth();
  const previousYScroll = useRef();

  useEffect(() => {
    const handleScroll = (event) => {
      const { scrollY } = window;

      const diffY = previousYScroll.current - scrollY
      previousYScroll.current = scrollY;

      if (scrollY < 50) {
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

  return (
    <>
      <nav className={`ml-2 md:ml-16 mt-10 fixed transition ${isVisible ? '' : '-translate-y-[200px]'}`}>
        <Link
          href='/'
        >
          <div className='p-2 shadow-lg rounded-full bg-primary-50
    flex justify-center items-center transition
    hover:shadow-md hover:scale-110
    active:shadow-md active:scale-95'>
            <BiArrowBack
              className='text-primary-900'
              size={50}
            />
          </div>
        </Link>
      </nav>

      <div className='mt-20 2xl:my-20 py-20 px-4 md:px-16 lg:px-36 flex flex-col gap-16 2xl:gap-32'>
        <section className='flex flex-col items-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-900 mb-16 lg:mb-32'>Kde nás najdete?</h1>
          <div className='w-full grid grid-rows-2 gap-y-8 grid-flow-col-1 md:grid-cols-[1fr_max-content] md:grid-rows-1 gap-x-8'>
            <div className='relative w-full h-full rounded-lg overflow-hidden row-start-2 row-end-3 md:row-span-1 shadow-lg'>
              {
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
                  <Map />
                )
              }
            </div>
            <ul className='flex flex-col justify-center gap-8'>
              <li className='bg-primary-50 p-8 shadow-lg rounded-lg'>
                <p className='text-3xl text-primary-900 font-semibold mb-8'>Hlavní město Praha<br />a Středočeský kraj:</p>
                <div className='text-2xl text-primary-900'>
                  <p className='italic'>IČO: 05591872</p>
                  <address>
                    Ostrovní 2059/4 <br />
                    110 00, Praha 1
                  </address>
                  <a href={`mailto:${email}`} target='_blank' rel='noreferrer' className='block'>
                    <div className='flex items-center gap-4 mt-4'>
                      <MdAlternateEmail size={36} className='text-primary-900' />
                      <span>{email}</span>
                    </div>
                  </a>
                  <a href={`tel:${phone.replaceAll(' ', '')}`} target='_blank' rel='noreferrer' className='block'>
                    <div className='flex items-center gap-4 mt-4'>
                      <FiPhoneCall size={36} className='text-primary-900' />
                      <span>{phone}</span>
                    </div>
                  </a>
                </div>
              </li>
              <li className='bg-primary-50 p-8 shadow-lg rounded-lg'>
                <p className='text-3xl text-primary-900 font-semibold mb-8'>Královéhradecký kraj<br />a Pardubický kraj:</p>
                <div className='text-2xl text-primary-900'>
                  <address>
                    Šimkova 1224/2b <br />
                    500 03, Hradec Králové
                  </address>
                  <a href={`mailto:${email}`} target='_blank' rel='noreferrer' className='block'>
                    <div className='flex items-center gap-4 mt-4'>
                      <MdAlternateEmail size={36} className='text-primary-900' />
                      <span>{email}</span>
                    </div>
                  </a>
                  <a href={`tel:${phoneSekretarka.replaceAll(' ', '')}`} target='_blank' rel='noreferrer' className='block'>
                    <div className='flex items-center gap-4 mt-4'>
                      <FiPhoneCall size={36} className='text-primary-900' />
                      <span>{phoneSekretarka}</span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className=''>
          <div className=''>
            <div className='bg-primary-50 lg:flex rounded-lg overflow-hidden shadow-xl'>
              <img
                src='/business/house.jpg'
                alt='house'
                className='w-full h-[400px] lg:h-auto lg:w-[400px] object-cover'
              />

              <div
                id={width > 1024 ? '' : 'kontakty'}
                className='flex-1 rounded-xl p-6 sm:p-8 2xl:px-36 lg:py-8'
              >
                <HSecondary additionalStyling='mb-8 lg:mb-16 text-4xl lg:text-5xl'>Pošlete nám nezávaznou poptávku</HSecondary>
                <Form />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacts;