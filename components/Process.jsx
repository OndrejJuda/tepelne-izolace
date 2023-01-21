import React from 'react';
import { CTAButton, HSecondary } from './';

const processSteps = [
  { image: '/business/first-contact.jpg', title: 'První kontakt', descripton: 'Nostrud elit sunt mollit reprehenderit adipisicing quis cupidatat dolor enim sit.' },
  { image: '/business/preparation.jpg', title: 'Příprava realizace', descripton: 'Ullamco adipisicing ullamco minim deserunt aliquip dolore nisi amet dolor ad ipsum.' },
  { image: '/business/construction.jpg', title: 'Realizace', descripton: 'Lorem sint sit magna ea duis.' },
  { image: '/business/details.jpg', title: 'Doladění detailů', descripton: 'Dolore cupidatat laboris cillum fugiat nulla dolore adipisicing.' },
  { image: '/business/finish.jpg', title: 'Dokončení izolace', descripton: 'Sit quis laborum elit dolore veniam tempor ex nostrud dolore ullamco ipsum labore proident.' },
];

const Process = () => {
  return (
    <section
      id='proces'
      className='flex justify-center my-48 '
    >
      <div className='flex flex-col my-36 justify-center items-center'>
        <HSecondary additionalStyling='text-5xl mb-32'>Jak to u nás funguje?</HSecondary>
        <ul className='flex flex-col gap-16 mb-32'>
          {
            processSteps.map(({ image, title, descripton }, index) => (
              <li
                height={100}
                key={title}
                className='flex-1 flex flex-col md:flex-row gap-32'
              >
                <img
                  src={image}
                  alt={image}
                  className={`${index % 2 ? 'order-1' : 'order-2'} w-[400px] h-[400px] object-cover rounded-xl flex-1 shadow-xl`}
                />
                <div className={`${index % 2 ? 'order-2' : 'order-1'} flex-1 flex flex-col justify-center`}>
                  <div className='relative'>
                    <span
                      className={`text-8xl text-white bg-primary-50 p-2 w-[164px] h-[164px] rounded-full opacity-50
                    absolute -top-10 ${index % 2 ? '-right-28' : '-left-28'}
                    flex justify-center items-center -z-10`}
                    >
                      {index + 1}
                    </span>
                    <p className='text-3xl font-semibold text-primary-800 mb-8'>{title}</p>
                  </div>
                  <p className='text-xl text-primary-800'>{descripton}</p>
                </div>
              </li>
            ))
          }
        </ul>
        <CTAButton>Nezávazná poptávka</CTAButton>
      </div>
    </section>
  );
};

export default Process;