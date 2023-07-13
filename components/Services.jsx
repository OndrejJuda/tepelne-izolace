import React from 'react';
import { HSecondary, SectionWrapper } from './';

const Services = () => {
  return (
    <SectionWrapper
      id='sluzby'
      innerDivStyle=''
    >
      <div className='mx-8 md:mx-16 lg:mx-36 bg-primary-50 rounded-lg overflow-hidden shadow-xl 2xl:flex relative'>
        <div className='p-8 lg:p-20 relative z-10'>
          <div className='mb-10'>
            <HSecondary additionalStyling='text-3xl sm:text-5xl mb-10 text-center font-bold'>
              Moderní řešení pro zateplení střech a stropů: foukaná izolace pro nové i staré budovy
            </HSecondary>
            <div className='text-primary-900 text-lg'>
              <p className='mb-6'>
                Naše minerální foukaná izolace vám poskytne komfort, úsporu energie a dlouhou životnost, která se v posledních letech stává stále populárnější. Jedná se o <b>proces, při kterém se drobné částice minerální vlny foukají do stěn, stropů nebo podlahy budov, kde se postupně usazují a vytvářejí účinnou izolační bariéru.</b>
                <br />
                Naše izolace je flexibilní a snadno se instaluje. Její aplikace se provádí pomocí foukacího stroje, který dokáže izolaci umístit do nejrůznějších částí budovy. <b>Tento způsob umožňuje izolaci stěn, stropů, podlah a dalších oblastí, které by jinak byly velmi obtížné k izolaci.</b>
                <br />
                Minerální foukaná izolace také poskytuje vysokou úroveň zvukové izolace, která pomáhá snížit hluk v budově. To může být obzvláště užitečné v oblastech s vysokou úrovní hluku, jako jsou silnice, letiště a jiná průmyslová místa.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4 '>
                <div className='rounded-lg overflow-hidden shadow-xl' >
                  <img
                    src='/business/dutina.png'
                    alt='dutina'
                    className='w-full h-auto lg:max-h-[400px] object-cover'
                  />
                </div>
                <div className='rounded-lg overflow-hidden shadow-xl'>
                  <img
                    src='/business/podkrovi.png'
                    alt='podkrovi'
                    className='w-full h-auto lg:max-h-[400px] object-cover'
                  />
                </div>
              </div>
              <p>
                Další výhodou minerální foukané izolace je její <b>odolnost vůči plísním, hmyzu a dalším škůdcům. Používáme nehořlavou, paropropustnou izolaci odolnou proti vodě</b>, což z ní dělá trvanlivou a spolehlivou izolační materiál s dlouhou životností.
                <br />
                Vzhledem k výše uvedeným výhodám se minerální foukaná izolace stává stále populárnější volbou pro ty, kteří hledají účinný a spolehlivý způsob, jak zlepšit tepelnou a zvukovou izolaci svých budov. uto izolaci můžete použít v nových domech nebo přidat do starších domů při rekonstrukci.
                <br />
                Je také ekologickou volbou, protože je vyráběna z recyklovaných materiálů a lze ji snadno recyklovat.
                Pokud hledáte spolehlivou a účinnou izolační metodu pro svou budovu, minerální foukaná izolace je tou správnou volbou. Naše izolace vám pomůže šetřit na energiích, sníží hluk, odolá škůdcům, vydrží dlouho a v létě vás ochrání před horkem.
              </p>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <HSecondary additionalStyling='text-3xl sm:text-5xl mb-10 text-center font-bold'>
              Certifikovaní specialisté na aplikaci
            </HSecondary>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 ' >
              <div className='bg-white rounded-lg  shadow-xl' >
                <div className='text-primary-900 p-4 sm:p-8 text-xl sm:text-1xl'>
                  <h2 className='text-3xl sm:text-4xl mb-5 text-center font-bold'>
                    KNAUF – SUPAFIL LOFT
                  </h2>
                  <img
                    src='/logo/knauf.svg'
                    alt='knauf'
                    className='w-64 h-auto lg:max-h-[400px] object-cover mx-auto mb-7'
                  />
                  <p className='mb-10 text-justify'>
                    K zateplování používáme izolaci Supafil Loft od Knaufu z minerální vlny bez obsahu formaldehydu a pojiv. Je určena k nafoukání do nových i stávajících otevřených i uzavřených podkrovních, půdních prostor, podhledů, dutin a dalších různých střešních konstrukcí.
                    SUPAFIL LOFT má vynikající tepelně technické vlastnosti, výbornou schopnost vyplnit dutiny ve stavebních konstrukcích a ideální vlastnosti pro aplikaci foukáním. Kromě rychlé instalace tím zajišťuje také dosažení maximální kvality zateplení.
                    Izolace má nízkou sedavost, zvukovou a protipožární ochranu v jednom, je odolná proti plísním a nehnije ani se nerozkládá – a to vše bez umělých přísad.
                  </p>
                  <div className='flex flex-col gap-2 text-center'>
                    <p className='font-bold'>Výhody zateplovacího materiálu:</p>
                    <ul className='list-disc list-inside'>
                      <li>Nízká hmotnost aplikovaného materiálu</li>
                      <li>Přirozeně nehořlavá – třída reakce na oheň A1</li>
                      <li>Lambda 0,039 při objemové hmotnosti 16 kg/m3</li>
                      <li>Vynikající akustický útlum</li>
                      <li>Paropropustná</li>
                      <li>Odolná proti plísním, nehnije ani se nerozkládá</li>
                      <li>Nepráší</li>
                      <li>Čistě přírodní – zdravotně nezávadná</li>
                    </ul>
                  </div>
                  <p className='mt-8 text-center '>
                    Pro splnění podmínek dotace NZÚ Light je potřeba zateplit vrstvou o minimální tloušťce 30 centimetrů a hustotou alespoň 16 kg/m3
                  </p>
                </div>
              </div>
              <div className='bg-white rounded-lg shadow-xl'>
                <div className='text-primary-900 p-4 sm:p-8 text-xl sm:text-1xl'>
                  <h2 className='text-3xl sm:text-4xl mb-4 text-center font-bold'>
                    Izolace THERMOFLOC
                  </h2>
                  <img
                    src='/logo/logothermofloc.svg'
                    alt='thermofloc'
                    className='w-64 h-auto lg:max-h-[400px] object-cover mx-auto mb-6'
                  />
                  <p className='mb-10 text-justify'>
                    Izolační materiál THERMOFLOC se vyrábí pouze z novinového papíru, za přidání minerálních látek pro konzervaci a protipožární ochranu. Papír se nahrubo rozdrtí a potom dále zpracuje v rozvlákňovacím zařízení na jemná, pružná celulózová vlákna. Hotový výrobek se balí do pytlů a skládá na palety. Certifikovaná interní a externí kontrola kvality zaručuje, že celulózová izolace THERMOFLOC vyhovuje nejvyšším evropským nárokům na kvalitu. Dokladem toho je Evropské technické schválení. Celulózou můžeme izolovat v tloušťce od 20 do 500 mm. Zhutnění izolačního materiálu je přitom, podle oblasti použití, od 28 do 60 kg/m3.
                  </p>
                  <div className='flex flex-col gap-2 text-center'>
                    <p className='font-bold'>Výhody zateplovacího materiálu:</p>
                    <ul className='list-disc list-inside'>
                      <li>Nejlepší ochrana proti přehřívání konstrukce v létě</li>
                      <li>Nižší pořizovací cena</li>
                      <li>Lambda 0,037 při montážní hustotě 28 - 47 kg/m3</li>
                      <li>Vynikající akustický útlum</li>
                      <li>100% biologická – 100% certifikovaná</li>
                      <li>Po usednutí nepráší</li>
                      <li>Vyrobená pouze z novinového papíru</li>
                    </ul>
                  </div>
                  <p className='mt-8 text-center'>
                    Pro splnění podmínek dotace NZÚ Light je potřeba zateplit vrstvou o minimální tloušťce 30 centimetrů a hustotou alespoň 28 kg/m3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </SectionWrapper >
  )
};

export default Services;