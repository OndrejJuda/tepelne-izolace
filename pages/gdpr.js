import Head from 'next/head';
import { Footer } from '../components';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import parse from 'html-react-parser';

import gdpr from '../gdpr';

const GDPR = () => {

  return (
    <>
      <Head>
        <title>Lunastav</title>
        <meta name="description" content="Tepelné izolace do každé rodiny" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className='min-h-screen flex flex-col'>
        <main>
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
          <div className='py-20 px-36 flex flex-col gap-8'>
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
        </main>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GDPR;