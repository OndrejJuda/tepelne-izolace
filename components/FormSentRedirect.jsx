import React, { useState, useEffect, useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';



const FormSentRedirect = () => {
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
              className='text-primary-900'
              size={50}
            />
          </div>
        </Link>
      </nav>
      <div className='my-40 py-20 px-4  md:px-16 lg:px-36 flex flex-col justify-center items-center gap-8  text-primary-900 '>
        <h1 className='text-4xl font-semibold text-center'>Děkujeme vám. Poptávkový formulář byl úspěšně odeslán ✅</h1>
      </div>
    </>
  );
};

export default FormSentRedirect;