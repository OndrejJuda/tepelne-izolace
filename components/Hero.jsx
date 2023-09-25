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
    <section
      id=''
      className='flex flex-col justify-center bg-white rounded-lg lg:mx-36 relative my-10 mb-[-100px]'
    >
      <div className="w-full relative">
        <img
          src='/business/hero-gif.gif'
          alt='hero'
          className='w-full absolute object-cover sm:h-[350px] lg:w-75 md:w-50 sm:w-35 lg:h-[450px] rounded-2xl'
        />

        <div className="absolute top-8 left-8 w-full h-96 flex flex-col">
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-white max-w-[900px]">
            Vaše cesta k lepší izolaci!<br></br> To je
            <span className="text-transparent bg-gradient-to-r from-primary-50 to-primary-500 bg-clip-text  transition-bg-clip duration-500 "> LUNASTAV</span><br></br>
            <div className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary-white my-8 md:max-w-[300px] lg:max-w-[700px] sm:max-w-[300px]">
              <em>{text}</em> {/* Použijte <em>, abyste text získali kurzívou */}
              <span className="text-primary-white">{cursor}</span>
            </div>
          </p>
        </div>
      </div>
      <div className="lg:flex md:flex justify-end xs:hidden">
        <img
          src='/business/typek.png'
          alt='worker1'
          className='sm:max-w-[500px] md:my-32 object-cover lg:w-75 md:w-50 sm:w-35 lg:z-20 sm:z-20'
        />
      </div>
    </section>
  );
};

export default Hero;
