import React from 'react';
import { SectionWrapper } from '.';
import Link from 'next/link';
import { Header, Breadcrumb } from '../components';
import { FiHome, FiChevronRight } from 'react-icons/fi';

const breadcrumbItems = [
  { href: '/', label: 'Úvod', icon: FiHome },
  { href: '/zatepleni', label: 'Zateplení' }
];

const Insulation = () => {
  return (
    <>
      <Header />
      <SectionWrapper
        id='zatepleni'
        innerDivStyle='flex flex-col justify-center bg-white rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen my-10 relative'
      >
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-6">
          <h1 className="text-3xl font-bold mb-4">Zateplení: Klíč k komfortu a úspoře energie ve vašem domě</h1>
          <p>
            Vašemu domovu a vašemu pohodlí dominuje jedna důležitá věc: zateplení! V tomto článku se zaměříme na to, jak zateplení může vylepšit váš domov a přinést vám větší pohodlí a úspory. Budeme mluvit o zateplení střech, stropů a fasád jednoduchým a srozumitelným způsobem, bez zbytečného odborného žargonu.
          </p>
          {/* Další obsah článku */}

          <div className="my-8">
            <h2 className="text-2xl font-bold">1. Co znamená zateplení?</h2>
            <p>
              Zateplení je proces, který pomáhá zlepšit tepelnou izolaci vašeho domu. To znamená, že v zimě udržuje teplo uvnitř a v létě udržuje chlad. Můžeme si ho představit jako tepelnou ochranu pro váš dům, což v konečném důsledku snižuje náklady na vytápění a klimatizaci.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">2. Proč je zateplení tak důležité?</h2>
            <p>
              Důležitost zateplení nelze přehlížet. Kromě úspor na energiích přináší také zvýšený komfort. V zatepleném domě je příjemnější v horkých letních dnech i v chladných zimních měsících. Zateplení rovněž prodlužuje životnost vašeho domu.
            </p>
          </div>
          {/* Pokračování s dalšími částmi článku */}

          <div className="my-8">
            <h2 className="text-2xl font-bold">3. Jak probíhá zateplení střechy?</h2>
            <p>
              Zateplení střechy je jedním z klíčových prvků celého procesu. To zahrnuje přidání izolační vrstvy pod střešní krytinu, což minimalizuje únik tepla a zvyšuje odolnost vůči povětrnostním vlivům.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">4. Zateplení stropu: Co je třeba vědět</h2>
            <p>
              Zateplení stropu možná není tak časté, ale může přinést mnoho výhod. Tímto způsobem zlepšíte izolaci mezi jednotlivými patry domu a snížíte hluk.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">5. Fasáda: Krása a funkce zateplení</h2>
            <p>
              Zateplení fasády není jen o izolaci. Moderní materiály a designy mohou váš domov výrazně zlepšit esteticky.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">6. Jaký materiál vybrat pro zateplení?</h2>
            <p>
              Při zateplení je rozhodující volba správného materiálu. Existuje mnoho možností, včetně minerální vlny, polystyrenu nebo ekologických materiálů. Výběr závisí na vašich potřebách a finančních možnostech.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">7. Jaký je proces zateplení?</h2>
            <p>
              Zateplení není jednoduchou záležitostí, ale profesionální tým vám rád poskytne pomoc. Proces zahrnuje přípravu povrchu, instalaci izolace a následné úpravy fasády nebo střechy.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">8. Jaké jsou výhody zateplení?</h2>
            <p>
              Zateplení přináší mnoho výhod. Kromě úspor na energiích přispívá také k ochraně životního prostředí a snižuje emise skleníkových plynů. Vaše domácnost tak má nižší ekologickou stopu.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">9. Kolik stojí zateplení?</h2>
            <p>
              Náklady na zateplení se liší podle rozsahu práce a zvolených materiálů. Je však důležité mít na paměti, že investice do zateplení se v dlouhodobém horizontu vyplatí.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">10. Důležité rady před zahájením zateplení</h2>
            <p>
              Před započetím zateplení je důležité si udělat plán a zvážit všechny možnosti. Dbejte na kvalitu materiálů a vyberte si odborníka, který práci provede.
            </p>
          </div>
          {/* Závěr článku */}

          <div className="my-8">
            <h2 className="text-2xl font-bold">Závěr</h2>
            <p>
              Zateplení je investicí do budoucnosti vašeho domova. Zlepšuje komfort, šetří peníze a chrání životní prostředí. Pokud uvažujete o zateplení střechy, stropu nebo fasády, důležité je vybrat kvalitní materiály a spolehlivé odborníky na provedení práce. Vaše domácnost zaznamená pozitivní změny a vy budete moci žít pohodlněji.
            </p>
          </div>
          {/* Často kladené otázky */}

          <div className="my-8">
            <h2 className="text-2xl font-bold">Často kladené otázky</h2>
            <p>
              <strong>1. Jak dlouho trvá zateplení domu?</strong><br />
              Délka trvání zateplení závisí na rozsahu práce, ale obvykle trvá několik týdnů.
            </p>
            <p>
              <strong>2. Jaké jsou nejběžnější materiály pro zateplení fasády?</strong><br />
              Mezi nejběžnější materiály patří minerální vlna, polystyren a dřevovláknité desky.
            </p>
            <p>
              <strong>3. Mohu zateplit dům sám?</strong><br />
              I když to teoreticky lze udělat samostatně, doporučujeme profesionální instalaci pro nejlepší výsledky.
            </p>
            <p>
              <strong>4. Jaké jsou úspory na energiích po zateplení?</strong><br />
              Úspory se mohou lišit, ale můžete očekávat výrazné snížení nákladů na vytápění a klimatizaci.
            </p>
            <p>
              <strong>5. Může zateplení domu zvýšit hodnotu nemovitosti?</strong><br />
              Ano, zateplení může zvýšit hodnotu nemovitosti tím, že zlepšuje energetickou efektivitu a vzhled domu.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center items-center mb-6 ">
            <div className="md:w-2/4 p-4 md:border-r-2 border-gray-400">
              <p className="text-center text-4xl mb-6">Zateplení stropu, střechy, fasády: Pro rodinné domy</p>
              <p className="text-center text-lg mb-6">Přeměňte svůj dům v energeticky šetrnou oázu s top zateplením stropu, střechy nebo fasády. Komfort a úspora energie čeká!</p>
            </div>
            <div className="sm:flex-1 flex flex-col p-4 text-center items-center w-3/4">
              <Link href="/zatepleni/zatepleni-stropu" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg bg-primary-50 h-24 text-black rounded-md hover:text-black group hover:bg-gray- sm:w-3/4">
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative text-xl">Zateplení stropu</span>
              </Link>
              <Link href="/zatepleni/zatepleni-strechy" className="relative inline-flex my-4 items-center px-12 py-3 overflow-hidden text-lg bg-primary-50 h-24 text-black rounded-md hover:text-black group hover:bg-gray-50 sm:w-3/4">
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative text-xl">Zateplení střechy</span>
              </Link>
              <Link href="/zatepleni/zatepleni-fasady" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg bg-primary-50 h-24 text-black rounded-md hover:text-black group hover:bg-gray-50 sm:w-3/4">
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative text-xl">Zateplení fasády</span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* <section id='zatepleni' innerDivStyle=''>
        <div className='mx-8 md:mx-16 lg:mx-36 bg-white rounded-lg overflow-hidden 2xl:flex relative'>
          <div className='p-8 lg:p-20'>
            <Breadcrumb items={breadcrumbItems} />
            <div className='mb-16'>
              <h2 className='text-4xl sm:text-6xl mb-20  font-bold'>
                Moderní řešení pro zateplení střech a stropů: foukaná izolace pro nové i staré budovy
              </h2>
              <div className="mx-auto max-w-9xl sm:px-6 lg:px-8">
                <div className=" space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                  <div className="flex flex-col items-center bg-white  rounded-lg ">
                    <img src="/favicon/tick.png" alt="tick" className="flex-shrink-0 w-20 h-22 mt-6 mb-6" />
                    <div className="ml-3 mr-3">
                      <h3 className="text-xl mb-2 font-medium text-center">Výhody minerální foukané izolace</h3>
                      <p className="mb-6 text-lg text-center">
                        Naše minerální foukaná izolace je zárukou komfortu, energetické efektivity a dlouhé životnosti, což ji činí stále oblíbenější volbou v posledních letech. Tento proces spočívá v foukání drobných částic minerální vlny do stěn, stropů nebo podlah budov, kde se postupně usazují a vytváří efektivní izolační bariéru.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white ">
                    <img src="/favicon/tick.png" alt="tick" className="flex-shrink-0 w-20 h-22 mt-6 mb-6" />
                    <div className="ml-3 mr-3">
                      <h3 className="text-xl mb-2 font-medium text-center">Snadná a flexibilní instalace izolace</h3>
                      <p className="mb-6 text-lg text-center">
                        Naše izolace je flexibilní a její instalace je snadná. Aplikace se provádí pomocí foukacího stroje, který dokáže izolaci umístit do nejrůznějších částí budovy. Tento způsob umožňuje izolaci stěn, stropů, podlah a dalších oblastí, které by jinak byly velmi obtížné k izolaci.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white ">
                    <img src="/favicon/tick.png" alt="tick" className="flex-shrink-0 w-20 h-22 mt-6 mb-6" />
                    <div className="ml-3 mr-3">
                      <h3 className="text-xl mb-2 font-medium text-center">Vysoká úroveň zvukové izolace</h3>
                      <p className="mb-6 text-lg text-center">
                        Minerální foukaná izolace také poskytuje vysokou úroveň zvukové izolace, která pomáhá snížit hluk v budově. To může být obzvláště užitečné v oblastech s vysokou úrovní hluku, jako jsou silnice, letiště a jiná průmyslová místa.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white ">
                    <img src="/favicon/tick.png" alt="tick" className="flex-shrink-0 w-20 h-22 mt-6 mb-6" />
                    <div className="ml-3 mr-3">
                      <h3 className="text-xl mb-2 font-medium text-center">Odolnost vůči plísním, hmyzu a škůdcům</h3>
                      <p className="mb-6 text-lg text-center">
                        Další výhodou minerální foukané izolace je její odolnost vůči plísním, hmyzu a dalším škůdcům. Používáme nehořlavou, paropropustnou izolaci odolnou proti vodě, což z ní dělá trvanlivou a spolehlivou izolační materiál s dlouhou životností.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white ">
                    <img src="/favicon/tick.png" alt="tick" className="flex-shrink-0 w-20 h-22 mt-6 mb-6" />
                    <div className="ml-3 mr-3">
                      <h3 className="text-xl mb-2 font-medium text-center">Popularita minerální foukané izolace</h3>
                      <p className="mb-6 text-lg text-center">
                        Vzhledem k výše uvedeným výhodám se minerální foukaná izolace stává stále populárnější volbou pro ty, kteří hledají účinný a spolehlivý způsob, jak zlepšit tepelnou a zvukovou izolaci svých budov. Tuto izolaci můžete použít v nových domech nebo přidat do starších domů při rekonstrukci.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white ">
                    <img src="/favicon/tick.png" alt="tick" className="flex-shrink-0 w-20 h-22 mt-6 mb-6" />
                    <div className="ml-3 mr-3">
                      <h3 className="text-xl mb-2 font-medium text-center">Ekologická volba s mnoha výhodami</h3>
                      <p className="mb-6 text-lg text-center">
                        Je také ekologickou volbou, protože je vyráběna z recyklovaných materiálů a lze ji snadno recyklovat. Pokud hledáte spolehlivou a účinnou izolační metodu pro svou budovu, minerální foukaná izolace je tou správnou volbou. Naše izolace vám pomůže šetřit energií, snížit hluk, odolávat škodcům, vydržet dlouho a v létě vás ochránit před horkem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center mb-16'>
              <h2 className='text-3xl sm:text-5xl mb-10 text-center font-bold'>
                Certifikovaní specialisté na aplikaci
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='bg-white rounded-lg shadow-xl'>
                  <div className='text-primary-900 p-4 sm:p-8 text-lg sm:text-xl'>
                    <h2 className='text-3xl sm:text-4xl mb-4 text-center font-bold'>
                      KNAUF – SUPAFIL LOFT
                    </h2>
                    <img
                      src='/logo/knauf.svg'
                      alt='knauf'
                      className='w-48 h-auto lg:max-h-[300px] object-cover mx-auto mb-6 rounded-md'
                    />
                    <p className='mb-6 sm:mb-8 text-justify'>
                      K zateplování používáme izolaci Supafil Loft od Knaufu z minerální vlny bez obsahu formaldehydu a pojiv. Je určena k nafouknutí do nových i stávajících otevřených i uzavřených podkrovních, půdních prostor, podhledů, dutin a dalších různých střešních konstrukcí. SUPAFIL LOFT má vynikající tepelně technické vlastnosti, výbornou schopnost vyplnit dutiny ve stavebních konstrukcích a ideální vlastnosti pro aplikaci foukáním. Rychlá instalace zajišťuje maximální kvalitu zateplení. Izolace má nízkou sedavost, poskytuje zvukovou a protipožární ochranu a je odolná proti plísním. Neobsahuje umělé přísady a nehnije ani se nerozkládá.
                    </p>
                    <div className='flex flex-col gap-2'>
                      <p className='font-bold text-center'>Výhody zateplovacího materiálu:</p>
                      <ul className='list-disc marker:text-blue-600 list-outside pl-5 text-lg'>
                        <li>Nízká hmotnost aplikovaného materiálu</li>
                        <li>Přirozeně nehořlavý - třída reakce na oheň A1</li>
                        <li>Lambda 0,039 při objemové hmotnosti 16 kg/m3</li>
                        <li>Vynikající akustický útlum</li>
                        <li>Paropropustný</li>
                        <li>Odolný proti plísním, nehnije ani se nerozkládá</li>
                        <li>Nepráší</li>
                        <li>Čistě přírodní - zdravotně nezávadný</li>
                      </ul>
                    </div>
                    <p className='mt-6 sm:mt-8 text-justify border-l-4 border-blue-600 pl-4 my-2'>
                      Pro splnění podmínek dotace NZÚ Light je potřeba zateplit vrstvou o minimální tloušťce 30 centimetrů a hustotou alespoň 16 kg/m3.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                      <div className='bg-white rounded-lg shadow-xl '>
                        <div className='text-primary-900 p-4 sm:p-8 text-lg sm:text-xl scale-100 hover:scale-150'>
                          <img
                            src='/business/knauf_cert.png'
                            alt='knauf_cert'
                            className='w-full h-auto rounded-md mb-4 border border-gray-300'
                          />
                        </div>
                      </div>
                      <div className='bg-white rounded-lg shadow-xl '>
                        <div className='text-primary-900 p-4 sm:p-8 text-lg sm:text-xl scale-100 hover:scale-150'>
                          <img
                            src='/business/knauf_cert2.png'
                            alt='knauf_cert2'
                            className='w-full h-auto rounded-md mb-4 border border-gray-300'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white rounded-lg shadow-xl'>
                  <div className='text-primary-900 p-4 sm:p-8 text-lg sm:text-xl'>
                    <h2 className='text-3xl sm:text-4xl mb-4 text-center font-bold'>
                      Izolace THERMOFLOC
                    </h2>
                    <img
                      src='/logo/logothermofloc.svg'
                      alt='thermofloc'
                      className='w-48 h-auto lg:max-h-[300px] object-cover mx-auto mb-6 rounded-md'
                    />
                    <p className='mb-6 sm:mb-8 text-justify'>
                      Izolační materiál THERMOFLOC se vyrábí pouze z novinového papíru s přidáním minerálních látek pro konzervaci a protipožární ochranu. Papír se nahrubo rozdrtí a poté zpracovává v rozvlákňovacím zařízení na jemná, pružná celulózová vlákna. Hotový výrobek se balí do pytlů a skládá na palety. Certifikovaná interní a externí kontrola kvality zaručuje, že celulózová izolace THERMOFLOC splňuje nejvyšší evropské standardy. To je doloženo Evropským technickým schválením. S celulózou můžeme izolovat tloušťky od 20 do 500 mm. Zhutnění izolačního materiálu se pohybuje od 28 do 60 kg/m3, v závislosti na oblasti použití.
                    </p>
                    <div className='flex flex-col gap-2 '>
                      <p className='font-bold text-center'>Výhody zateplovacího materiálu:</p>
                      <ul className='list-disc marker:text-orange-600 list-outside pl-5 text-lg '>
                        <li>Nejlepší ochrana proti přehřívání konstrukce v létě</li>
                        <li>Nižší pořizovací cena</li>
                        <li>Lambda 0,037 při montážní hustotě 28 - 47 kg/m3</li>
                        <li>Vynikající akustický útlum</li>
                        <li>100% biologický – 100% certifikovaný</li>
                        <li>Po usednutí nepráší</li>
                        <li>Vyrobený pouze z novinového papíru</li>
                      </ul>
                    </div>
                    <p className='mt-6 sm:mt-8 border-l-4 border-orange-600 pl-4 text-justify my-8'>
                      Pro splnění podmínek dotace NZÚ Light je potřeba zateplit vrstvou o minimální tloušťce 30 centimetrů a hustotou alespoň 28 kg/m3.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                      <div className='bg-white rounded-lg shadow-xl 0'>
                        <div className='text-primary-900 p-4 sm:p-8 text-lg sm:text-xl scale-100 hover:scale-150 '>
                          <img
                            src='/business/thermofloc_cert.png'
                            alt='thermofloc_cert'
                            className='w-full h-auto rounded-md mb-4 border border-gray-300'
                          />
                        </div>
                      </div>
                      <div className='bg-white rounded-lg shadow-xl '>
                        <div className='text-primary-900 p-4 sm:p-8 text-lg sm:text-xl scale-100 hover:scale-150'>
                          <img
                            src='/business/thermofloc_cetr2.png'
                            alt='thermofloc_cetr2'
                            className='w-full h-auto rounded-md mb-4 border border-gray-300'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl sm:text-6xl my-8 mb-12 text-center font-bold">
              Zateplení fasády pro rodinné domy
            </h2>
            <div className="grid grid-cols-1  sm:grid-cols-2 my-6 gap-8 text-xl">
              <div className="border-l-4 border-orange-600 pl-4 text-justify">
                <strong>Zateplení fasády</strong>  efektivně bojuje proti ztrátám tepla, může je snížit až o polovinu. Pokud je zateplení domu správně provedeno, může výrazně snížit spotřebu energie a zároveň poskytnout ochranu fasádě. Dalším plusem je, že díky zateplení můžete dosáhnout lepšího akustického pohodlí po celý rok.
              </div>
              <div className="flex justify-center items-center">
                <Link
                  href='/#poptavka'
                  className="inline-block rounded-full bg-green-500 px-6 py-2.5 text-xl font-bold leading-normal text-white text-center shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg scale-100 hover:scale-110 duration-200">
                  Začněte šetřit na vytápění! Zateplit nyní.
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xl mb-4">
              <div className='my-4'>
                <img
                  src='/business/izolace_fasady.jpg'
                  alt='izolacefasady'
                  className='object-cover object-center h-full w-full md:w-full rounded-lg'
                />
              </div>
              <div className="my-4">
                <p className='text-justify border-r-4 border-orange-600 pr-4'>
                  Kvalitním zateplením fasády zajistíte dlouhodobou ochranu domu proti vodě z deště, mrazu a slunečnímu světlu, což zamezuje přehřívání během letních měsíců. Tepelná izolace udržuje chlad mimo domov a zvyšuje schopnost stěny akumulovat teplo během zimy, což vede k lepší tepelné pohodě a snižuje chladné vedení ze stěn.
                </p>
                <p className="my-2 font-bold">
                  Cena se odvíjí od:
                </p>
                <ul className='list-disc marker:text-orange-600 list-outside pl-5'>
                  <li>Volby typu zateplovacího materiálu</li>
                  <li>Druhu budovy, která se má zateplit</li>
                  <li>Aplikačních podmínek při montáži</li>
                </ul>
                <p className="my-2 font-bold">
                  Důležité vlastnosti:
                </p>
                <ul className='list-disc marker:text-orange-600 list-outside pl-5'>
                  <li>Tepelná a zvuková izolace</li>
                  <li>Redukce tepelných ztrát</li>
                  <li>Snadnější dosažení tepelného komfortu</li>
                  <li>Odolnost materiálu při zachování nízké hmotnosti</li>
                  <li>Ekologické a zdravotně bezpečné složení</li>
                  <li>Prodloužení životnosti fasády</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xl text-justify">
              <div className='my-4'>
                <h3 className='border-l-4 border-primary-nzuzelena pl-4 font-bold text-3xl sm:text-4xl mb-4'>Dotace</h3>
                <h4 className='font-bold text-xl sm:text-2xl mb-2'>Kolik získáte?</h4>
                <p className='font-bold sm:text-xl text-primary-nzuzelena mb-2 '>Až 150 000 Kč (6 000 Kč/běžný metr)</p>
                <ul className='list-disc list-outside font-bold mb-2 pl-5'>
                  <li>Finanční prostředky můžete čerpat předem – zálohou</li>
                </ul>
                <h4 className='font-bold text-xl sm:text-2xl mb-2 '>Kdo může žádat?</h4>
                <ul className='list-disc list-outside font-bold mb-6  pl-5'>
                  <li>Vlastníci nebo spoluvlastníci rodinného domu, ve kterém jsou trvale hlášeni déle než od 12. září 2022</li>
                  <li>Vlastníci nebo spoluvlastníci trvale obývané stavby pro rodinnou rekreaci, ve které jsou trvale hlášeni déle než od 12. září 2022 </li>
                </ul>
                <p className='border-l-4 border-primary-nzuzelena pl-4 mb-10'><span className='font-bold'>PODMÍNKA!</span> Žadatel a všichni členové jeho domácnosti pobírají ke dni podání žádosti o dotaci starobní důchod nebo invalidní důchod 3. stupně, nebo v období mezi 12. 9. 2022 a dnem podání žádosti pobírali příspěvek na bydlení.</p>
                <div className="flex justify-center items-center">
                  <Link
                    href='https://novazelenausporam.cz/nzu-light/'
                    className="inline-block rounded-full bg-green-500 px-6 py-2.5 text-xl font-bold leading-normal text-white text-center shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg scale-100 hover:scale-110 duration-200">
                    Zjistit více o dotacích
                  </Link>
                </div>
              </div>
              <div className='my-4'>
                <img
                  src='/business/donation.jpg'
                  alt='dotace'
                  className='object-cover object-center h-full w-full md:w-full rounded-lg '
                />
              </div>
            </div>
          </div>
        </div >
      </section > */}
    </>
  );
};

export default Insulation;
