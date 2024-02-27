import React from 'react';
import { SectionWrapper } from '.';
import Link from 'next/link';
import { Header, Breadcrumb } from '.';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image'

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

        <h1 className="text-4xl font-bold text-center py-10">Nabídka zateplení stropu</h1>
        <div class="flex flex-col md:flex-row justify-center">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 justify-items-center">
            <div class="md:col-span-6 border border-gray-100 bg-primary-25 rounded-md">
              <h1 className="text-3xl font-bold mb-3 text-center my-3">Foukaná izolace</h1>
              <p className="mb-4 text-center">Krása domova tkví nejen v designu, ale i v komfortu a energetické efektivitě, kterou vám může poskytnout správně zateplený strop. Objevte s námi magii foukané izolace a změňte svůj domov v útočiště pohodlí a úspor energie.</p>

              <h2 className="text-2xl font-semibold mb-2 mx-3">Proč foukaná izolace? Odpověď je jasná!</h2>
              <ul className="list-disc list-inside mb-4 mx-3">
                <li className="mb-2">Blesková instalace: Efektivní a čistá metoda bez zbytečných nepořádků.</li>
                <li className="mb-2">Úspory v kapse: Snížíme vaše energetické náklady a zvýšíme komfort bydlení.</li>
                <li className="mb-2">Zelená volba: Optujeme pro ekologické a udržitelné řešení.</li>
                <li className="mb-2">Dokonalé pokrytí: Izolace i nejdostupnějších koutů a štěrbin.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-2 mx-3">Cesta k teplejšímu domovu – Jak na to?</h2>
              <ol className="list-decimal list-inside mb-4 mx-3">
                <li className="mb-2">Bezpečí v první řadě: Podrobná konzultace a vyhodnocení vašeho projektu s odborníky.</li>
                <li className="mb-2">Analyzujeme každý kout: Detailní průzkum pro identifikaci všech kritických míst a potřeb.</li>
                <li className="mb-2">Transparentní nabídka: Jasné a přehledné cenové podmínky bez skrytých nákladů.</li>
                <li className="mb-2">Příprava prostoru: Ochrana prostoru a příprava pro maximálně efektivní instalaci.</li>
                <li className="mb-2">Magie foukání: S precizností aplikujeme izolaci, aby pokryla veškerý prostor.</li>
                <li className="mb-2">Kvalita na prvním místě: Zajišťujeme, že každý kout je perfektně izolován a kontrolujeme výsledky.</li>
              </ol>

              <h2 className="text-2xl font-semibold mb-2 mx-3">Vaše Cesta k úsporám a pohodlí začíná nyní!</h2>
              <p className="mb-4 mx-3">Nemusíte již hledat dál, protože ideální řešení pro váš komfortní a energeticky efektivní domov je přímo před vámi! S naším týmem profesionálů a špičkovou foukanou izolací získáte domov, ve kterém bude vždy příjemně. Kontaktujte nás a přidejte se k našim spokojeným klientům na cestě za lepším bydlením!</p>
              <p className="mb-4 text-2xl mx-3">Jsme certifikovaná firma na aplikaci celulózy <span className='text-red-600 font-bold'>THERMOFLOC</span> a minerální vaty <span className='text-blue-600 font-bold'>KNAUF – SUPAFIL LOFT</span></p>









            </div>

            <div class="md:col-span-6 border border-gray-100 bg-primary-25 rounded-md ">
              <h1 className="text-3xl font-bold mb-3 text-center my-3">PUR pěna</h1>
              <p className="mb-4 text-center mx-3">Chcete-li dosáhnout optimálního komfortu ve vašem domě a současně snížit náklady na energie, je PUR pěna tou správnou volbou. Naše profesionální služby vám umožní vylepšit izolaci vašeho domova a vytvořit prostředí plné pohodlí a úspor.</p>

              <h2 className="text-3xl font-semibold mb-4 mx-3">Proč zvolit PUR pěnu?</h2>
              <ul className="list-disc list-inside mb-6 mx-3">
                <li className="mb-2">Rychlá instalace: Efektivní a bezproblémový proces aplikace bez zbytečného zdržování.</li>
                <li className="mb-2">Vysoká účinnost: Dosáhněte výrazného snížení tepelných ztrát a tím i nákladů na vytápění.</li>
                <li className="mb-2">Moderní technologie: Inovativní materiál s vynikajícími izolačními vlastnostmi pro optimální komfort.</li>
                <li className="mb-2">Dlouhodobá životnost: Odolnost vůči vlhkosti a deformacím zaručuje dlouhodobou účinnost.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 mx-3">Jak na aplikaci PUR pěny?</h2>
              <ol className="list-decimal list-inside mb-6 mx-3">
                <li className="mb-2">Konzultace a plánování: Detailní analýza vašich potřeb a navržení optimálního řešení.</li>
                <li className="mb-2">Profesionální aplikace: Precizní nanesení PUR pěny odborným týmem s použitím moderních technik.</li>
                <li className="mb-2">Kontrola a úpravy: Důkladná kontrola kvality aplikace a případné finální úpravy pro dokonalý výsledek.</li>
              </ol>

              <h2 className="text-3xl font-semibold mb-4 mx-3">Kontaktujte nás pro teplejší domov ještě dnes!</h2>
              <p className="mb-4 mx-3">Nabízíme vám možnost získat teplejší a útulnější domov díky profesionální aplikaci PUR pěny. Nechte se přesvědčit o našich službách a začněte užívat si komfortního bydlení s nižšími náklady na energie!</p>
              <p className="mb-4 text-lg mx-3">Jsme certifikovanou firmou pro aplikaci PUR pěny renomovaných výrobců.</p>
            </div>
          </div>
        </div>
        {/* Mezera mezi sekcemi */}


        {/* <div class="w-full lg:w-1/2 order-first lg:order-last">
            <img src="/business/vata1.jpg" alt="vata1" class="mb-4 rounded-md " />
            <img src="/business/vata2.jpg" alt="vata2" class="mb-4 rounded-md" />
            <img src="/business/foukana1.jpg" alt="foukana1" class="rounded-md mb-4 w-full max-h-[170px] sm:max-h-[300px] lg:max-h-[230px] object-cover" />
          </div> */}
      </SectionWrapper >
    </>
  );
};

export default InsulationCieling;
