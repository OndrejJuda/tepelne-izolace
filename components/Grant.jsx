import React, { useState, useEffect, useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

const Grant = () => {
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
      <div className='flex flex-col 2xl:flex-row 2xl:items-center my-20 py-20 px-4 md:px-16 lg:px-36 gap-16 2xl:gap-32'>
        <div className='flex flex-col gap-8 text-primary-900 order-2 2xl:order-1'>
          <h1 className='text-4xl font-semibold'>Vyřizujeme dotace z programu NZÚ Light</h1>
          <p className='text-lg'>
            Se zvládnutím energetické krize nám má pomoci nový dotační program s názvem Nová zelená úsporám Light (NZÚ Light). V rámci tohoto programu můžete čerpat dotace na zateplení různých částí domu jako je strop, střecha či fasáda, nebo na výměnu plastových oken a vchodových dveří. Výhodou celého programu je rychlost čerpání dotace a pomoc tam, kde je to skutečně potřeba a také možnost čerpání i v případech, že už je některá část domu zateplená. Například pokud máte zateplené podkroví, tak můžete čerpat dotaci na zateplení fasády a opačně.
          </p>
          <p className='text-lg'>
            Pokud jste v důchodovém věku, nebo invalidním důchodu, tak Vám může dotace pokrýt až 100% z celkové ceny zateplení. Peníze na zateplení můžete čerpat i předem. Program je také určen pro vlastníky a spoluvlastníky rodinných domů z řad seniorů a lidí pobírajících dávky na bydlení. Podmínkou je, aby v době podání žádosti byl rodinný dům ve vlastnictví žadatelů a ti v něm měli současně trvalý pobyt, a to déle než od 12. září 2022.
          </p>
          <p className='text-lg'>
            U klasické Nové zelené úsporám, se příspěvek vyplácí až po realizaci opatření. NZÚ Light na to jde z opačné strany a příspěvek můžete obdržet ještě před samotnou realizací. Po schválení dotace jsou Vám vyplaceny finance, za které můžete zateplení či výměnu oken provést. Díky tomu se jedná o zcela unikátní projekt, jaký tu ještě nebyl.
          </p>
        </div>
        <img src='/logo/nzulight-logo.png' alt='nzu logo' className='w-[200px] order-1 2xl:order-2' />
      </div>
    </>
  );
};

export default Grant;