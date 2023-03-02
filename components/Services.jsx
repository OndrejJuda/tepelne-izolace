import React from 'react';
import { HSecondary, SectionWrapper } from './';

const Services = () => {
  return (
    <SectionWrapper
      id='sluzby'
      innerDivStyle=''
    >
      <div className='mx-8 md:mx-16 lg:mx-36 bg-primary-50 rounded-lg overflow-hidden shadow-xl 2xl:flex relative'>
        <div className='p-8 lg:p-20'>
          <div className='mb-10'>
            <HSecondary additionalStyling='text-3xl sm:text-5xl mb-10'>Zateplujeme foukanou izolací střechy a stropy nových i starších budov</HSecondary>
            <div className='text-primary-900 text-lg '>
              <p className='mb-4'>
                Minerální foukaná izolace je moderní způsob izolace, který se v posledních letech stává stále populárnějším. Jedná se o <b>proces, při kterém se drobné částice minerální vlny foukají do stěn, stropů nebo podlahy budov, kde se postupně usazují a vytvářejí účinnou izolační bariéru.</b> 
                <br />
                Výhodou minerální foukané izolace je její flexibilita a snadná aplikace. Její aplikace se provádí pomocí foukacího stroje, který dokáže izolaci umístit do nejrůznějších částí budovy. <b>Tento způsob umožňuje izolaci stěn, stropů, podlah a dalších oblastí, které by jinak byly velmi obtížné k izolaci.</b>
                <br />
                Minerální foukaná izolace také poskytuje vysokou úroveň zvukové izolace, která pomáhá snížit hluk v budově. To může být obzvláště užitečné v oblastech s vysokou úrovní hluku, jako jsou silnice, letiště a jiná průmyslová místa.
                <br />
                Další výhodou minerální foukané izolace je její <b>odolnost vůči plísním, hmyzu a dalším škůdcům. Používáme nehořlavou, paropropustnou izolaci odolnou proti vodě</b>, což z ní dělá trvanlivou a spolehlivou izolační materiál s dlouhou životností.
                <br />
                Vzhledem k výše uvedeným výhodám se minerální foukaná izolace stává stále populárnější volbou pro ty, kteří hledají účinný a spolehlivý způsob, jak zlepšit tepelnou a zvukovou izolaci svých budov. Tento typ izolace se často používá v nových stavbách, ale také může být instalován v existujících budovách během renovace.
                <br />
                Je také ekologickou volbou, protože je vyráběna z recyklovaných materiálů a lze ji snadno recyklovat.
                Pokud hledáte spolehlivou a účinnou izolační metodu pro svou budovu, minerální foukaná izolace je tou správnou volbou. Snižuje energetické náklady, zlepšuje zvukovou izolaci, je odolná proti škůdcům, má dlouhou životnost a v letních měsících Vás ochrání před horkem.
                <br />
                Naší odborníci Vám pomohou vybrat idealní variantu zateplení pro Váš dům a vyřídíme Vám státní dotaci od NZÚ.
              </p>
            </div>
          </div>

          <div
            className='flex flex-col justify-center'
          >
            <HSecondary additionalStyling='text-3xl sm:text-5xl mb-10'>Používáme minerální vlnu bez formaldehydu vyráběnou v Belgii</HSecondary>
            <div
              className='text-primary-900 text-lg'
            >
              <p className='mb-4'>
                Foukaná minerální izolace je tepelná izolace, která se aplikuje na stěny, stropy a podhledy pomocí speciálního stroje, který rozptýlí vláknité materiály, jako jsou skleněné vlákna nebo minerální vlákna, do nástěnných prostorů. Foukananá izolace se díky svým vlastnostem poskytuje dokonalou tepelnou izolaci téměř každému objektu bez vzniku tepelných mostů. Tato izolace má několik výhod, jako jsou:
              </p>
              <ul className='pl-4 flex flex-col gap-2'>
                <li>
                  1. Vysoká tepelná izolace: foukaná minerální izolace poskytuje vysokou tepelnou izolaci, což pomáhá udržovat teplo uvnitř budovy a snižuje potřebu vytápění.
                </li>
                <li>
                  2. Snadná instalace: foukaná minerální izolace se snadno aplikuje pomocí speciálního stroje, což umožňuje rychlou a efektivní instalaci bez potřeby velkých stavebních úprav.
                </li>
                <li>
                  3. Flexibilita: Foukaná minerální izolace se dá aplikovat na různé typy konstrukcí a prostorů, včetně obtížně přístupných míst.
                </li>
                <li>
                  4. Odolnost: Foukaná minerální izolace je odolná proti vlhkosti a plísním, což ji činí vhodnou pro použití ve vlhkých prostorách, jako jsou koupelny nebo sklepy.
                </li>
                <li>
                  5. Bezpečnost: Foukaná minerální izolace je nehořlavá, bezpečná pro použití v interiéru a neobsahuje žádné škodlivé látky.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          src='/business/isolation.jpg'
          alt='isolation'
          className='object-left object-cover absolute top-0 left-0 w-full h-full opacity-[15%]'
        />
      </div>

    </SectionWrapper>
  );
};

export default Services;