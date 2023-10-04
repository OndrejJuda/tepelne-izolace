import React from 'react';
import { SectionWrapper } from '.';
import Link from 'next/link';
import { Header, Breadcrumb } from '.';
import { FiHome, FiChevronRight } from 'react-icons/fi';

const breadcrumbItems = [
  { href: '/', label: 'Úvod', icon: FiHome },
  { href: '/zatepleni', label: 'Zateplení' },
  { href: '/zatepleni-stropu', label: 'Zateplení stropu' },
];

const InsulationCieling = () => {
  return (
    <>
      <Header />
      <SectionWrapper
        id='sluzby'
        innerDivStyle='flex flex-col justify-center bg-white rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen my-10 relative'
      >
        <Breadcrumb items={breadcrumbItems} />

        <div class="flex flex-col-reverse mt-6 lg:flex-row ">
          <div class="w-full lg:w-3/4 pr-8 ">
            <h1 class="text-3xl font-bold mb-4">Přijďte na teplou stranu života s foukanou izolací!</h1>
            <p class="mb-4">Krása domova tkví nejen v designu, ale i v komfortu a energetické efektivitě, kterou vám může poskytnout správně zateplený strop. Objevte s námi magii foukané izolace a změňte svůj domov v útočiště pohodlí a úspor energie.</p>

            <h2 class="text-2xl font-semibold mb-2">Proč foukaná izolace? Odpověď je jasná!</h2>
            <ul class="list-disc list-inside mb-4">
              <li class="mb-2">Blesková instalace: Efektivní a čistá metoda bez zbytečných nepořádků.</li>
              <li class="mb-2">Úspory v kapse: Snížíme vaše energetické náklady a zvýšíme komfort bydlení.</li>
              <li class="mb-2">Zelená volba: Optujeme pro ekologické a udržitelné řešení.</li>
              <li class="mb-2">Dokonalé pokrytí: Izolace i nejdostupnějších koutů a štěrbin.</li>
            </ul>

            <h2 class="text-2xl font-semibold mb-2">Cesta k teplejšímu domovu – Jak na to?</h2>
            <ol class="list-decimal list-inside mb-4">
              <li class="mb-2">Bezpečí v první řadě: Podrobná konzultace a vyhodnocení vašeho projektu s odborníky.</li>
              <li class="mb-2">Analyzujeme každý kout: Detailní průzkum pro identifikaci všech kritických míst a potřeb.</li>
              <li class="mb-2">Transparentní nabídka: Jasné a přehledné cenové podmínky bez skrytých nákladů.</li>
              <li class="mb-2">Příprava prostoru: Ochrana prostoru a příprava pro maximálně efektivní instalaci.</li>
              <li class="mb-2">Magie foukání: S precizností aplikujeme izolaci, aby pokryla veškerý prostor.</li>
              <li class="mb-2">Kvalita na prvním místě: Zajišťujeme, že každý kout je perfektně izolován a kontrolujeme výsledky.</li>
            </ol>

            <h2 class="text-2xl font-semibold mb-2">Vaše Cesta k úsporám a pohodlí začíná nyní!</h2>
            <p class="mb-4">Nemusíte již hledat dál, protože ideální řešení pro váš komfortní a energeticky efektivní domov je přímo před vámi! S naším týmem profesionálů a špičkovou foukanou izolací získáte domov, ve kterém bude vždy příjemně. Kontaktujte nás a přidejte se k našim spokojeným klientům na cestě za lepším bydlením!</p>
            <p class="mb-4 text-2xl">Jsme certifikovaná firma na aplikaci celulózy <span className='text-red-600 font-bold '>THERMOFLOC</span> a minerální vaty <span className='text-blue-600 font-bold '>KNAUF – SUPAFIL LOFT</span></p>
          </div>
          <div class="w-full lg:w-1/4 order-first lg:order-last  ">
            <img src="/business/vata1.jpg" alt="vata1" class="mb-4 rounded-md " />
            <img src="/business/vata2.jpg" alt="vata2" class="mb-4 rounded-md" />
            <img src="/business/foukana1.jpg" alt="foukana1" class=" rounded-md mb-4 w-full max-h-[170px] sm:max-h-[300px] lg:max-h-[230px] object-cover" />
          </div>
        </div>

      </SectionWrapper >
    </>
  );
};

export default InsulationCieling;
