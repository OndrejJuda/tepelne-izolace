import React from 'react';
import { CTAButton, HSecondary, SectionWrapper } from './';

const processSteps = [
  { image: '/business/first-contact.jpg', title: 'Osobní návštěva', descripton: 'Zaměření nemovitosti naším odborným konzultantem. Necháme vypracovat odborný posudek kvůli vyřízení dotace pro Vaši nemovitost' },
  { image: '/business/preparation.jpg', title: 'Zpracování a požádání o dotaci z programu NZÚ', descripton: 'Necháme vypracovat odborný posudek a podáme žádost o dotaci z programu NZÚ' },
  { image: '/business/construction.jpg', title: 'Realizace', descripton: 'Lorem sint sit magna ea duis.' },
  { image: '/business/details.jpg', title: 'Doložení realizace na NZÚ', descripton: '' },
  { image: '/business/finish.jpg', title: 'Dokončení izolace', descripton: 'Sit quis laborum elit dolore veniam tempor ex nostrud dolore ullamco ipsum labore proident.Sit quis laborum elit dolore veniam tempor ex nostrud dolore ullamco ipsum labore proident.' },
];

const Process = () => {
  return (
    <SectionWrapper
      id='proces'
      innerDivStyle='flex flex-col justify-center items-center'
    >

      <HSecondary additionalStyling='text-4xl md:text-5xl mb-32'>Jak to u nás funguje?</HSecondary>

      <ul className='flex flex-col gap-24 xl:gap-16 mb-16 xl:mb-32 mx-8 lg:mx-16'>
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
                    className={`text-8xl text-white bg-secondary-500 w-[120px] h-[120px] xl:w-[164px] xl:h-[164px] p-2 rounded-full opacity-50
                      absolute -top-10 right-0 ${index % 2 ? 'xl:right-0 2xl:-right-28' : 'xl:left-0 2xl:-left-28'}
                      flex justify-center items-center`}
                  >
                    {index + 1}
                  </span>

                </div>
                <p className='text-3xl font-semibold text-primary-100 mb-8 z-10'>{title}</p>

                <p className='max-w-[800px] text-xl text-primary-100 z-10'>{descripton}</p>

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
      <CTAButton>Nezávazná poptávka</CTAButton>
    </SectionWrapper>
  );
};

export default Process;