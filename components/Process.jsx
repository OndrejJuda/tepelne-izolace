import React from 'react';
import { CTAButton, HSecondary, SectionWrapper } from './';

const processSteps = [
  { image: '/business/first-contact.jpg', title: 'První kontakt', descripton: 'Nostrud elit sunt mollit reprehenderit adipisicing quis cupidatat dolor enim sit.' },
  { image: '/business/preparation.jpg', title: 'Příprava realizace', descripton: 'Ullamco adipisicing ullamco minim deserunt aliquip dolore nisi amet dolor ad ipsum.' },
  { image: '/business/construction.jpg', title: 'Realizace', descripton: 'Lorem sint sit magna ea duis.' },
  { image: '/business/details.jpg', title: 'Doladění detailů', descripton: 'Dolore cupidatat laboris cillum fugiat nulla dolore adipisicing.' },
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
                    className={`text-8xl text-white bg-primary-50 w-[120px] h-[120px] xl:w-[164px] xl:h-[164px] p-2 rounded-full opacity-50
                      absolute -top-10 right-0 ${index % 2 ? 'xl:right-0 2xl:-right-28' : 'xl:left-0 2xl:-left-28'} -z-10
                      flex justify-center items-center`}
                  >
                    {index + 1}
                  </span>

                  <p className='text-3xl font-semibold text-primary-800 mb-8'>{title}</p>
                </div>

                <p className='max-w-[800px] text-xl text-primary-800'>{descripton}</p>

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