import React from 'react';
import { SectionWrapper } from '.';
import { Header, Breadcrumb } from '.';
import { FiHome, FiChevronRight } from 'react-icons/fi';

const breadcrumbItems = [
  { href: '/', label: 'Úvod', icon: FiHome },
  { href: '/zatepleni', label: 'Zateplení' },
  { href: '/zatepleni-fasady', label: 'Zateplení fasády' },
];

const InsulationFacade = () => {
  return (
    <>
      <Header />
      <SectionWrapper
        id='sluzby'
        innerDivStyle='flex flex-col justify-center bg-primary-25 rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen my-24 md:my-4  relative'
      >
        <Breadcrumb items={breadcrumbItems} />

        <div class="flex flex-col-reverse mt-6 lg:flex-row ">
          <div class="w-full lg:w-3/4 pr-8">
            <h1 class="text-3xl font-bold mb-4">Změňte svůj domov s kvalitním zateplením fasády!</h1>
            <p class="mb-4">Vaše domácí pohodlí a finanční úspory mohou být na dosah ruky díky kvalitnímu zateplení fasády. Přijměte výzvu a proměňte svůj domov v energeticky efektivní útočiště.</p>

            <h2 class="text-2xl font-semibold mb-2">Proč zvolit zateplení fasády s námi?</h2>
            <ul class="list-disc list-inside mb-4">
              <li class="mb-2">Rychlé a čisté provedení: Bezstarostně a efektivně zateplíme fasádu.</li>
              <li class="mb-2">Snížení nákladů: Pomůžeme vám snížit energetické náklady a zvýšit komfort bydlení.</li>
              <li class="mb-2">Ekologický přístup: Naše řešení jsou šetrná k životnímu prostředí.</li>
              <li class="mb-2">Precizní provedení: Zajistíme, že zateplení pokryje každý detail fasády.</li>
            </ul>

            <h2 class="text-2xl font-semibold mb-2">Jak probíhá proces zateplení fasády s námi?</h2>
            <ol class="list-decimal list-inside mb-4">
              <li class="mb-2">Bezpečnost na prvním místě: Spolehněte se na naše odborníky, kteří vám poskytnou podrobnou konzultaci.</li>
              <li class="mb-2">Důkladný průzkum: Každý detail fasády bude pod drobnohledem, abychom identifikovali všechny potřeby.</li>
              <li class="mb-2">Transparentní nabídka: Naše cenové podmínky budou jasné a přehledné, bez skrytých nákladů.</li>
              <li class="mb-2">Příprava prostoru: Pro zajištění efektivní instalace bude prostor připraven a chráněn.</li>
              <li class="mb-2">Profesionální provedení: S precizností provedeme zateplení fasády, tak aby všechny části byly dokonale izolovány.</li>
              <li class="mb-2">Kontrola kvality: Každý detail bude pečlivě zkontrolován, abychom zajistili optimální výsledek.</li>
            </ol>

            <h2 class="text-2xl font-semibold mb-2">Začněte uvažovat o zateplení fasády ještě dnes!</h2>
            <p class="mb-4">Nemusíte hledat dál, ideální řešení pro zateplení fasády máte před sebou. S naším týmem profesionálů a kvalitním zateplovacím materiálem zajistíte, že ve vašem domě bude vždy příjemně. Kontaktujte nás a připojte se k našim spokojeným klientům, kteří již zažili výhody zateplení!</p>
          </div>


          {/* <div class="w-full lg:w-1/4 order-first lg:order-last  ">
            <img src="/business/vata1.jpg" alt="vata1" class="mb-4 " />
            <img src="/business/vata2.jpg" alt="vata2" class="mb-4 " />
            <img src="/business/foukana1.jpg" alt="foukana1" class="mb-4 w-full max-h-[170px] sm:max-h-[300px] lg:max-h-[230px] object-cover" />
          </div> */}
        </div>

      </SectionWrapper >
    </>
  );
};

export default InsulationFacade;
