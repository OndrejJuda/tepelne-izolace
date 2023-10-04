import React, { useState, useEffect, useRef } from 'react';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import parse from 'html-react-parser';
import { Header, Breadcrumb } from '../components';

import gdpr from '../gdpr';

const GDPR = () => {
  const [isVisible, setIsVisible] = useState(true);

  const previousYScroll = useRef();
  const breadcrumbItems = [
    { href: '/', label: 'Úvod', icon: FiHome },
    { href: '/gdpr', label: 'GDPR' }
  ];
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
      <Header />
      <div className='my-20 px-4 md:px-16 lg:px-36 flex flex-col gap-5 text-primary-900'>
        <Breadcrumb items={breadcrumbItems} />
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