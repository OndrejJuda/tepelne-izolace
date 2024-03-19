import React from 'react';
import { SectionWrapper } from '.';
import Link from 'next/link';
import { Header, Breadcrumb } from '../components';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const breadcrumbItems = [
  { href: '/', label: 'Úvod', icon: FiHome },
  { href: '/zatepleni', label: 'Zateplení' }
];

const list = [
  {
    title: "Orange",
    img: "/business/vata1.jpg",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "/business/vata1.jpg",
    price: "$3.00",
  },
  {
    title: "Raspberry",
    img: "/business/vata1.jpg",
    price: "$10.00",
  }

];

const Insulation = () => {
  return (
    <>
      <Header />
      <SectionWrapper
        id='zatepleni'
        innerDivStyle='flex flex-col justify-center rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen my-24 md:my-4  relative bg-primary-25'
      >
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-6 bg-primary-25">
          <div className="flex flex-col md:flex-row w-full justify-center items-center mb-6 ">
            <div className="md:w-2/4 p-4 md:border-r-2 border-gray-400">
              <p className="text-center text-4xl mb-6">Zateplení stropu, střechy, fasády: Pro rodinné domy</p>
              <p className="text-center text-lg mb-6">Přeměňte svůj dům v energeticky šetrnou oázu s top zateplením stropu, střechy nebo fasády. Komfort a úspora energie čeká!</p>
            </div>
            <div className="sm:flex-1 flex flex-col p-4 text-center items-center w-3/4 ">
              <Link href="/zatepleni/zatepleni-stropu" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg bg-primary-100 h-24 text-black rounded-md hover:text-black group hover:bg-gray- sm:w-3/4">
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative text-xl">Zateplení stropu</span>
              </Link>
              <Link href="/zatepleni/zatepleni-strechy" className="relative inline-flex my-4 items-center px-12 py-3 overflow-hidden text-lg bg-primary-100 h-24 text-black rounded-md hover:text-black group hover:bg-gray-50 sm:w-3/4">
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative text-xl">Zateplení střechy</span>
              </Link>
              <Link href="/zatepleni/zatepleni-fasady" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg bg-primary-100 h-24 text-black rounded-md hover:text-black group hover:bg-gray-50 sm:w-3/4">
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative text-xl">Zateplení fasády</span>
              </Link>
            </div>
          </div>

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

        </div>
      </SectionWrapper>

    </>
  );
};

export default Insulation;
