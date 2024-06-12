import React, { useState, useEffect, useRef } from 'react';
import { SectionWrapper } from './';
import { Header, Breadcrumb } from '../components';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { FaSolarPanel, FaWarehouse } from "react-icons/fa";
import { MdOutlineRoofing } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { BsArrowBarDown } from "react-icons/bs";

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
      <SectionWrapper
        id='dotace'
        innerDivStyle='flex flex-col justify-center bg-primary-25 rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen my-24 md:my-4  relative'
      >
        <Breadcrumb items={breadcrumbItems} />

        <div className="py-10 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dotaci NZÚ Light vyřídíme my!</p>
              <p className="mt-4 text-lg leading-8 text-gray-600">Podáme za Vás žádost o tyto dotace a vyřídíme veškerou administrativu.</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-300">
                      <BsArrowBarDown className='h-6 w-6' />
                    </div>
                    Zateplení stropu
                  </dt>
                  <dd className="mt-2 mb-2  text-base leading-7 text-gray-600">Dotace na kompletní zateplení stropu pod nevytápěnými prostory nebo stropu obývaného podkroví.</dd>
                  {/* <Link href="/dotace" title="Zateplení stropu" className="mt-4 text-sm font-medium text-primary-500 hover:text-primary-600">
                    Zjistit více
                  </Link> */}
                  <p><strong>Dotace  1500 Kč/m²</strong></p>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-300">
                      <MdOutlineRoofing className='h-8 w-8 ' />
                    </div>
                    Zateplení střechy
                  </dt>
                  <dd className="mt-2 mb-2  text-base leading-7 text-gray-600">Dotace na kompletní zateplení střechy.</dd>
                  {/* <Link href="/dotace" title="Zateplení stropu" className="mt-4 text-sm font-medium text-primary-500 hover:text-primary-600">
                    Zjistit více
                  </Link> */}
                  <p><strong>Dotace  1500 Kč/m²</strong></p>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-300">
                      <SiHiveBlockchain className='h-6 w-6' />
                    </div>
                    Zateplení fasády
                  </dt>
                  <dd className="mt-2 mb-2  text-base leading-7 text-gray-600">Dotace na zateplení fasády vhodnými tepelněizolačními materiály.</dd>
                  {/* <Link href="/dotace" title="Zateplení stropu" className="mt-4 text-sm font-medium text-primary-500 hover:text-primary-600">
                    Zjistit více
                  </Link> */}
                  <p><strong>Dotace až 150 000 Kč (6 000 Kč/běžný metr)</strong></p>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-300">
                      <FaSolarPanel className='h-6 w-6' />
                    </div>
                    FVE na ohřev vody
                  </dt>
                  <dd className="mt-2 mb-2 text-base leading-7 text-gray-600">Dotace na termický nebo fotovoltaický ohřev vody s využitím stávajícího bojleru nebo s novým bojlerem.</dd>
                  {/* <Link href="/dotace" title="Zateplení stropu" className="text-sm font-medium text-primary-500 hover:text-primary-600">
                    Zjistit více
                  </Link> */}
                  <p><strong>Dotace  70 000 Kč</strong></p>
                </div>
              </dl>
            </div>
            <div className='mx-auto max-w-2xl lg:text-center'><p className="mt-14 mb-14 text-3xl tracking-tight text-gray-900 sm:text-2xl">Na jakýkoliv dotaz Vám odpovíme na našem emailu <strong>dotace@lunastav.cz</strong></p></div>
            <div>
              <ul className="list-disc mt-16 text-lg">
                <strong className='text-2xl border-b-4 border-primary-300 pb-1'>Podmínky pro získání dotace:</strong>
                <p className='text-lg mt-2'>Nárok na dotaci máte v případě, že jste <strong>vlastníci</strong> nebo <strong>spoluvlastníci</strong> rodinného domu, nebo trvale obývané rekreační stavby, bytu nebo podílu v bytovém družstvu s právem užívat byt a zároveň splňujete jednu z těchto podmínek:</p>
                <li className='mb-2 mt-2'><strong>Všichni členové </strong>vaší domácnosti pobírají <strong>starobní důchod</strong>  nebo <strong>invalidní důchod 3. stupně</strong>.</li>
                <li className='mb-2 '>Vy nebo členové vaší domácnosti pobíráte v době podání žádosti <strong>příspěvek na bydlení</strong> či <strong>přídavek na dítě</strong>.</li>
                <p className='text-lg mt-2'>Jste-li příjemce starobního důchodu, na dotaci máte nárok v případě, že vy ani ostatní členové vaší domácnosti nevlastníte žádnou další nemovitost určenou k bydlení nebo podíl na takové nemovitosti.</p>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper >
    </>
  );
};

export default Grant;