import React from 'react';
import { HSecondary, SectionWrapper } from './';

const Services = () => {
  return (
    <SectionWrapper
      id='služby'
      innerDivStyle=''
    >
      <div className='text-primary-100 text-3xl 
      mx-8 md:mx-16 lg:mx-36 mb-36'>
        <p className='mb-8'>
          Zabýváme se zateplováním budov pomocí foukané izolace.
          Věříme, že kvalitně zateplený dům je v současné situaci správnou cestou ke snížení nákladů Vaší domácnosti. Preferujeme kvalitu před kvantitou a zakládáme si na individuálním přístupu ke každému klientovi.
        </p>
        <p className=''>
          Naší odborníci Vám pomohou vybrat idealní variantu zateplení pro Váš dům a vyřídíme Vám státní dotaci od NZÚ.
        </p>

      </div>
      <div className='text-primary-100 text-3xl 
      mx-8 md:mx-16 lg:mx-36 mb-36'>
        <p className='mb-8'>
          Vyřizujeme dotace z programu NZÚ (Light)
        </p>
        <p className='mb-8'>
         Se zvládnutím energetické krize nám má pomoci nový dotační program s názvem Nová zelená úsporám Light (NZÚ Light). V rámci tohoto programu můžete čerpat štědré dotace na zateplení různých částí domu jako je strop, střecha či fasáda, nebo na výměnu plastových oken a vchodových dveří. Výhodou celého programu je rychlost čerpání dotace a pomoc tam, kde je to skutečně potřeba a také možnost čerpání i v případech, že už je některá část domu zateplená. Například pokud máte zateplené podkroví, tak můžete čerpat dotaci na zateplení fasády a opačně.
        </p>
        <p className='mb-8'>
          Pokud jste v důchodovém věku, tak Vám může dotace pokrýt až 100% z celkové ceny zateplení. PENÍZE můžete čerpat PŘEDEM PŘI ZATEPLENÍ I VÝMĚNĚ OKEN. Program je určen pro vlastníky a spoluvlastníky rodinných domů z řad seniorů a lidí pobírajících dávky na bydlení. Podmínkou je, aby v době podání žádosti byl rodinný dům ve vlastnictví žadatelů a ti v něm měli současně trvalý pobyt, a to déle než od 12. září 2022. 
        </p>
          U klasické Nové zelené úsporám, se příspěvek vyplácí až po realizaci opatření. NZÚ Light na to jde z opačné strany a příspěvek můžete obdržet ještě před samotnou realizací. Po schválení dotace jsou Vám vyplaceny finance, za které můžete zateplení či výměnu oken provést. Díky tomu se jedná o zcela unikátní projekt, jaký tu ještě nebyl. 
          <p className='mb-8'>
          odstavec
        </p>
      </div>

      <div className='mx-8 md:mx-16 lg:mx-36 bg-secondary-600 flex flex-col xl:flex-row rounded-lg overflow-hidden shadow-xl'>
        <div
          className='p-8 lg:p-20 
          flex-1 flex flex-col justify-center order-2 xl:order-1'
        >
          <HSecondary additionalStyling='text-5xl mb-10'>Používáme čedičovou vatu, nebo kvalitní minerální vlnu vyráběnou v Belgii</HSecondary>
          <div
            className='text-primary-100 text-lg flex flex-col gap-4'
          >
            <p>
              Foukaná minerální izolace je tepelná izolace, která se aplikuje na stěny, stropy a podhledy pomocí speciálního stroje, který rozptýlí vláknité materiály, jako jsou skleněné vlákna nebo minerální vlákna, do nástěnných prostorů. Foukananá izolace se díky svým vlastnostem poskytuje dokonalou tepelnou izolaci téměř každému objektu bez vzniku tepelných mostů. Tato izolace má několik výhod, jako jsou:
            </p>
            <p>
              1. Vysoká tepelná izolace: foukaná minerální izolace poskytuje vysokou tepelnou izolaci, což pomáhá udržovat teplo uvnitř budovy a snižuje potřebu vytápění.
            </p>
            <p>
              2. Snadná instalace: foukaná minerální izolace se snadno aplikuje pomocí speciálního stroje, což umožňuje rychlou a efektivní instalaci bez potřeby velkých stavebních úprav.
            </p>
            <p>
              3. Flexibilita: Foukaná minerální izolace se dá aplikovat na různé typy konstrukcí a prostorů, včetně obtížně přístupných míst.
            </p>
            <p>
              4. Odolnost: Foukaná minerální izolace je odolná proti vlhkosti a plísním, což ji činí vhodnou pro použití ve vlhkých prostorách, jako jsou koupelny nebo sklepy.
            </p>
            <p>
              5. Bezpečnost: Foukaná minerální izolace je nehořlavá, bezpečná pro použití v interiéru a neobsahuje žádné škodlivé látky.
            </p>
          </div>
        </div>

        <img
          src='/business/ursa.jpg'
          alt='ursa'
          className='flex-1 object-left object-cover w-auto h-[200px] xl:h-auto xl:w-[300px] order-1 xl:order-2'
        />
      </div>
    </SectionWrapper>
  );
};

export default Services;