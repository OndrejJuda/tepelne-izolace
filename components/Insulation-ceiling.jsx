import React from 'react';
import { SectionWrapper } from '.';
import Link from 'next/link';
import { Header, Breadcrumb } from '.';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image'
import { Carousel } from '../components';

const breadcrumbItems = [
  { href: '/', label: 'Úvod', icon: FiHome },
  { href: '/zatepleni', label: 'Zateplení' },
  { href: '/zatepleni-stropu', label: 'Zateplení stropu' },
];



const blowingInsualtionSlides = [
  "/gallery/lavka1.jpg",
  "/gallery/vata1.jpg",
  "/gallery/vata2.jpg",
  "/gallery/celuloza1.jpg",
  "/gallery/celuloza2.jpg",

]

const purFoamSlides = [
  "/gallery/pur1.png",
  "/gallery/pur2.png"

]
const InsulationCieling = () => {

  return (
    <>
      <Header />
      <SectionWrapper
        id='sluzby'
        innerDivStyle='flex flex-col justify-center rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen my-10 relative'
      >
        <Breadcrumb items={breadcrumbItems} />

        <div className="text-4xl font-bold text-center p-4 border-b-2 border-gray-400 w-42 mb-4" >Nabídka zateplení stropu</div>
        <div class="flex flex-col md:flex-row justify-center">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 justify-items-center">
            <div class="md:col-span-6 bg-primary-100 rounded-md p-6">
              <h1 className="text-3xl font-bold mb-3 text-center my-3">Foukaná izolace</h1>
              <p className="mb-4 text-center">Krása domova tkví nejen v designu, ale i v komfortu a energetické efektivitě, kterou vám může poskytnout správně zateplený strop. Objevte s námi magii foukané izolace a změňte svůj domov v útočiště pohodlí a úspor energie.</p>

              <h2 className="text-2xl font-semibold mb-4 mx-3">Proč foukanou izolaci?</h2>
              <ul className="list-disc list-inside mb-8 mx-3">
                <li className="mb-2">Blesková instalace: Efektivní a čistá metoda bez zbytečných nepořádků.</li>
                <li className="mb-2">Úspory v kapse: Snížíme vaše energetické náklady a zvýšíme komfort bydlení.</li>
                <li className="mb-2">Zelená volba: Optujeme pro ekologické a udržitelné řešení.</li>
                <li className="mb-2">Dokonalé pokrytí: Izolace i nejdostupnějších koutů a štěrbin.</li>
              </ul>

              <div className="border-t-2 border-gray-400 py-4 flex justify-center">Galerie</div>
              <div className="flex justify-center mb-10">
                <div className="max-w-lg">
                  <Carousel slides={blowingInsualtionSlides} />
                </div>
              </div>
              <div className="border-t-2 border-gray-400 py-4 flex justify-center"></div>

              <p className="mb-4 text-2xl mx-3 ">Jsme certifikovaná firma na aplikaci celulózy <span className='text-red-600 font-bold'>THERMOFLOC</span> a minerální vaty <span className='text-primary-supafil font-bold'>KNAUF – SUPAFIL LOFT</span></p>

              <div className="flex justify-center items-center space-x-10 md:space-x-12">
                <img src="/business/supafil.png" className="object-contain h-48 md:h-60" alt="SUPAFIL LOFT" />
                <img src="/business/thermofloc-baleni.png" className="object-contain h-48 md:h-60" alt="THERMOFLOC" />
              </div>
            </div>

            <div class="md:col-span-6  bg-primary-100 rounded-md p-6 overflow-hidden">
              <h1 className="text-3xl font-bold mb-3 text-center my-3">PUR pěna</h1>
              <p className="mb-4 text-center mx-3">Chcete-li dosáhnout optimálního komfortu ve vašem domě a současně snížit náklady na energie, je PUR pěna tou správnou volbou. Naše profesionální služby vám umožní vylepšit izolaci vašeho domova a vytvořit prostředí plné pohodlí a úspor.</p>

              <h2 className="text-2xl font-semibold mb-4 mx-3">Proč zvolit PUR pěnu?</h2>
              <ul className="list-disc list-inside mb-8 mx-3">
                <li className="mb-2">Rychlá instalace: Efektivní a bezproblémový proces aplikace bez zbytečného zdržování.</li>
                <li className="mb-2">Vysoká účinnost: Dosáhněte výrazného snížení tepelných ztrát a tím i nákladů na vytápění.</li>
                <li className="mb-2">Moderní technologie: Inovativní materiál s vynikajícími izolačními vlastnostmi.</li>
                <li className="mb-2">Dlouhodobá životnost: Odolnost vůči vlhkosti a deformacím zaručuje dlouhodobou účinnost.</li>
              </ul>

              <div className="border-t-2 border-gray-400 py-4 flex justify-center">Galerie</div>
              <div className="flex justify-center mb-10">
                <div className="max-w-lg">
                  <Carousel slides={purFoamSlides} />
                </div>
              </div>
              <div className="border-t-2 border-gray-400 py-4 flex justify-center"></div>
              <p className="mb-4 text-2xl mx-3 flex justify-center">Průřez PUR pěny</p>
              <div className="flex justify-center items-center space-x-10 md:space-x-12">
                <img src="/business/purkostka.png" className="object-contain h-48 md:h-60" alt="PUR" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper >
    </>
  );
};

export default InsulationCieling;
