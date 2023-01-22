import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import parse from 'html-react-parser';

import gdpr from '../gdpr';

const GDPR = () => {
  return (
    <>
      <nav>
        <Link
          href='/#kontakty'
        >
          <div className='w-16 h-16 m-16 mb-0 shadow-lg rounded-full
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
      <div className='py-20 px-4 md:px-16 lg:px-36 flex flex-col gap-8'>
        <h2 className='text-4xl font-semibold'>Zásady ochrany osobních údajů</h2>
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