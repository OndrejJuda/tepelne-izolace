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
    'Solární ohřev vody v základní sestavě za korunu.',
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
    <SectionWrapper
      id=''
      innerDivStyle='flex flex-col justify-center bg-white rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen relative'
    >
      <div className="w-full relative">
        <img
          src='/business/hero-gif.gif'
          alt='hero'
          className='w-full absolute object-cover lg:w-75 md:w-50 sm:w-35 h-[400px] rounded-2xl'
        />
        <div className="absolute top-8 left-8 w-full h-96 flex flex-col">
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-white max-w-[900px]">
            Vaše cesta k lepší izolaci!<br></br> To je
            <span className="text-transparent bg-gradient-to-r from-primary-50 to-primary-500 bg-clip-text  transition-bg-clip duration-500 "> LUNASTAV</span><br></br>
            <div className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary-white my-8 md:max-w-[300px] lg:max-w-[700px] sm:max-w-[250px]">
              <em>{text}</em> {/* Use <em> to make the text italic */}
              <span className="text-primary-white">{cursor}</span>
            </div>
          </p>

        </div>
        <div className="sm:hidden w-full flex justify-center">
          <img
            src='/business/typek.png'
            alt='worker'
            className='w-[250px] object-cover'
          />
        </div>
      </div>
      <div className="sm:flex sm:justify-end sm:my-1 sm:mr-4">
        <img
          src='/business/typek.png'
          alt='worker'
          className='w-[450px] object-cover lg:w-75 md:w-50 sm:w-35 z-10'
        />
      </div>
    </SectionWrapper>
  );
};

export default Hero;
