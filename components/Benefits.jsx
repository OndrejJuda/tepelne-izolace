import React from 'react';
import { HSecondary } from './';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsPersonCheck } from 'react-icons/bs';
import { RiPriceTag3Line } from 'react-icons/ri';
import { SlSpeedometer } from 'react-icons/sl';

const iconProps = {
  size: 100,
  color: '#3e1e0d'
};

const benefits = [
  { icon: <AiOutlineVideoCamera {...iconProps} />, title: 'Konzultace a zaměření zdarma', description: 'Veniam et do aliqua cupidatat ea dolore velit ullamco mollit non enim laborum eu est.' },
  { icon: <BsPersonCheck {...iconProps} />, title: 'Kontrola termokamerou', description: 'Deserunt dolor id deserunt non labore.' },
  { icon: <RiPriceTag3Line {...iconProps} />, title: 'Bezkonkurenční ceny', description: 'Culpa nisi mollit ipsum duis dolor culpa consectetur aliquip exercitation id laborum enim Lorem dolor.' },
  { icon: <SlSpeedometer {...iconProps} />, title: 'Nejrychlejší řešení na trhu', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
];

const Benefits = () => {
  return (
    <section
      id='benefity'
      className='flex my-48'
    >
      <div className='flex flex-col items-center
      bg-primary-50 px-32 my-36 relative overflow-hidden'>
        <img
          src='/logo/logo-one-color.svg'
          alt='logo'
          className='absolute right-[50%] top-0 scale-125 opacity-50'
        />
        <div className='flex flex-col items-center z-10'>
          <HSecondary additionalStyling='text-5xl mt-16 mb-8'>Proč nás?</HSecondary>
          <ul className='flex flex-wrap gap-8 p-8'>
            {
              benefits.map((item) => (
                <li
                  key={item.title}
                  className='py-4 px-16
                flex-1 flex flex-col items-center jus'
                >
                  <div className='w-[82px] h-[82px] mb-8 bg-white rounded-full p-3
                flex justify-center items-center'>
                    {item.icon}
                  </div>
                  <p className='text-3xl p-2 font-semibold text-primary-500'>{item.title}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;