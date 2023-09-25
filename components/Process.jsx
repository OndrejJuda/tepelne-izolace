import React from 'react';
import { HSecondary, SectionWrapper } from './';

const processSteps = [
  { image: '/business/first-contact.jpg', title: 'Osobní návštěva – konzultace', descripton: 'Náš odborník se podívá na váš dům a poradí, jaký materiál a jakou tloušťku izolace použít. Detailně Vám vysvětlí proces zakázky a průběh dotace.' },
  { image: '/business/architekt.jpg', title: 'Necháme zpracovat odborný posudek', descripton: 'Podle informací, které získáme, připravíme vše potřebné pro instalaci a získání dotace.' },
  { image: '/business/documents.jpg', title: 'Zpracujeme a požádáme o dotaci z programu NZÚ', descripton: 'Pokud splňujete podmínky pro dotaci, můžete ji získat ještě předtím, než začneme s instalací.' },
  { image: '/business/isolation2.png', title: 'Realizace', descripton: 'Instalace obvykle trvá jen jeden den, ale může to být déle v závislosti na vašem domě.' },
  { image: '/business/fin.jpeg', title: 'Doložení realizace NZÚ', descripton: 'Po realizaci doložíme všechny potřebné dokumenty na NZÚ.' },
];

const Process = () => {
  return (
    <SectionWrapper
      id='proces'
      innerDivStyle='flex flex-col justify-center items-center mx-8 md:mx-16 lg:mx-36 w-screen'
    >
      <HSecondary additionalStyling='text-4xl sm:text-5xl my-12 mb-12 text-center'>Náš proces: Jak vám poskytneme nejlepší služby v oblasti foukané izolace</HSecondary>

      <ul className='flex flex-col gap-24 xl:gap-16 mb-16 xl:mb-32'>
        {
          processSteps.map(({ image, title, descripton }, index) => (
            <li
              height={100}
              key={title}
              className='xl:flex-1 flex flex-col xl:flex-row gap-12 xl:gap-32'
            >
              <div className={`${index % 2 ? 'xl:order-2' : 'xl:order-1'} xl:flex-1 flex flex-col justify-center`}>

                <div className='relative'>
                  <span
                    className={`text-8xl text-white bg-primary-100 w-[120px] h-[120px] xl:w-[164px] xl:h-[164px] p-2 rounded-full opacity-60
                      absolute -top-10 right-0 ${index % 2 ? 'xl:right-0 2xl:-right-28' : 'xl:left-0 2xl:-left-28'}
                      flex justify-center items-center`}
                  >
                    {index + 1}
                  </span>

                </div>
                <p className='text-2xl font-semibold text-primary-900 mb-8 z-10'>{title}</p>

                <p className='text-xl text-primary-900 z-10'>{descripton}</p>

              </div>

              <img
                src={image}
                alt={image}
                className={`${index % 2 ? 'xl:order-1' : 'xl:order-2'} xl:w-[400px] h-[400px] object-cover rounded-xl xl:flex-1 shadow-xl`}
              />
            </li>
          ))
        }
      </ul>
    </SectionWrapper>
  );
};

export default Process;