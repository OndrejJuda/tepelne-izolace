import React, { useState, useEffect, useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import parse from 'html-react-parser';

import gdpr from '../gdpr';

const GDPR = () => {
  const [isVisible, setIsVisible] = useState(true);

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
          href='/#poptavka'
        >
          <div className='p-2 shadow-lg rounded-full bg-primary-50
      flex justify-center items-center transition
      hover:shadow-md hover:scale-110
      active:shadow-md active:scale-95'>
            <BiArrowBack
              className='text-primary-500'
              size={50}
            />
          </div>
        </Link>
      </nav>
      <div className='my-20 py-20 px-4 md:px-16 lg:px-36 flex flex-col gap-8 text-primary-100'>
        <h1 className='text-4xl font-semibold'>Ochrana osobních údajů</h1>
        {
          gdpr.map((lv0, i0) => {
            return (
              <p key={i0.text}>
                <h3 className='text-3xl mb-6'>{parse(`${i0 + 1}. ${lv0.text}`)}</h3>
                {
                  lv0.children && lv0.children.map((lv1, i1) => {
                    return (
                      <p key={i1} className='mb-4'>
                        <p className='text-lg mb-2'>{parse(`${i0 + 1}.${i1 + 1}. ${lv1.text}`)}</p>
                        {
                          lv1.children && lv1.children.map((lv2, i2) => {
                            return (
                              <p key={i2}>
                                <p>{parse(`${i0 + 1}.${i1 + 1}.${i2 + 1}. ${lv2.text}`)}</p>
                              </p>
                            )
                          })
                        }
                      </p>
                    );
                  })
                }
              </p>
            );
          })
        }
      </div>
    </>
  );
};

export default GDPR;