import React, { useEffect, useState } from 'react';
import { SectionWrapper } from './';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  const textOptions = [
    'Zvyšte komfort a účinnost vašeho domova.',
    'Zateplením ušetříte 30 % nákladů na vytápění.',
    'FVE na ohřev vody v základní sestavě za korunu.',
    'Zajistíme vše od žádosti o dotaci až po realizaci.',
    'Užijte si rovnoměrně izolovaný prostor bez tepelných mostů.',
  ];

  useEffect(() => {
    let timeoutId;

    if (typeof window !== 'undefined') {
      if (typing) {
        // Typing animation
        timeoutId = setTimeout(() => {
          setText((prevText) => {
            const nextChar = textOptions[textIndex].charAt(prevText.length);
            return prevText + nextChar;
          });
        }, 60);

        if (text === textOptions[textIndex]) {
          // When text is fully typed, initiate backspace
          setTimeout(() => {
            setTyping(false);
            setCursorVisible(true);
          }, 3000);
        }
      } else {
        // Backspace animation
        timeoutId = setTimeout(() => {
          setText((prevText) => {
            return prevText.slice(0, -1);
          });
        }, 50);

        if (text === '') {
          // When text is fully backspaced, switch to the next text
          setTimeout(() => {
            const nextIndex = (textIndex + 1) % textOptions.length;
            setTextIndex(nextIndex);
            setTyping(true);
            setCursorVisible(true);
          }, 1000);
        }
      }

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [text, typing, textIndex, textOptions]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const cursor = cursorVisible ? '|' : '';

  return (
    <section
      id=''
      className='flex flex-col justify-center bg-transparent rounded-lg lg:mx-36 relative my-2 mb-16 sm:mb-36'
    >
      <div className="w-full relative">
        <div className="relative z-10 w-full h-96 flex flex-col md:py-10 px-8 md:px-16 lg:px-4 py-20">
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-white max-w-[900px]">
            Vaše cesta k větším úsporám!<br></br> To je
            <span className="text-transparent bg-gradient-to-r from-primary-50 to-primary-500 bg-clip-text  transition-bg-clip duration-500 "> LUNASTAV</span><br></br>
            <div className="text-2xl sm:text-3xl md:text-3xl font-bold z-30 text-primary-white my-8 md:max-w-[500px] lg:max-w-[500px] w-full sm:max-w-[300px]">
              {text}{/* Použijte <em>, abyste text získali kurzívou */}
              <span className="text-primary-white">{cursor}</span>
            </div>
          </p>
        </div>
      </div>
      <img
        src='/business/typek.png'
        alt='worker1'
        className=' w-[300px] sm:w-[350px] md:w-[500px] md:my-32 lg:my-28 object-cover sm:mx-1 z-20 absolute right-0 top-64 md:top-0 md:right-6 lg:right-0'
      />



    </section>
  );
};

export default Hero;
