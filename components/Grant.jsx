import React, { useState, useEffect, useRef } from 'react';
import { SectionWrapper } from './';
import { Header, Breadcrumb } from '../components';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const Grant = () => {
  const [isVisible, setIsVisible] = useState(true);

  const previousYScroll = useRef();

  const breadcrumbItems = [
    { href: '/', label: 'Úvod', icon: FiHome },
    { href: '/dotace', label: 'Dotace' }
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
      <SectionWrapper innerDivStyle="my-14 md:my-14">
        <div className='flex flex-col 2xl:flex-row 2xl:items-center px-4 md:px-16 lg:px-36 gap-16 2xl:gap-32'>
          <div className='flex flex-col gap-8 text-primary-900 order-2 2xl:order-1'>
            <Breadcrumb items={breadcrumbItems} />
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
        </div>
        <div className="bg-white p-8 md:p-12 lg:px-10 lg:py-12 my-16 rounded-lg">
          <div className="mb-10 text-4xl font-bold text-center">
            Jsme specialisté <span className="text-primary-nzumodra">Nové</span> <span className="text-primary-nzuzelena">zelené</span> <span className="text-primary-nzuzluta">úsporám</span>
          </div>
          <Link href='https://novazelenausporam.cz/specialista/14368' className='flex justify-center items-center w-full font-bold scale-100 hover:scale-110 duration-200 '>
            <div className="text-">Oficialní seznam specialistů</div>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Grant;