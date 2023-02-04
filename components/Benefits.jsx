import React from 'react';
import { HSecondary, SectionWrapper } from './';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsPersonCheck } from 'react-icons/bs';
import { RiPriceTag3Line } from 'react-icons/ri';
import { SlSpeedometer } from 'react-icons/sl';

const iconProps = {
  size: 100,
  color: '#3e1e0d'
};

const benefits = [
  { icon: <AiOutlineVideoCamera {...iconProps} />, title: 'Konzultace a zaměření Vaší nemovitosti zdarma', description: 'Veniam et do aliqua cupidatat ea dolore velit ullamco mollit non enim laborum eu est.' },
  { icon: <BsPersonCheck {...iconProps} />, title: 'Garance nejvyšší kvality použitých materiálů', description: 'Deserunt dolor id deserunt non labore.' },
  { icon: <RiPriceTag3Line {...iconProps} />, title: 'Kvalitní realizaci provedeme za jediný den', description: 'Culpa nisi mollit ipsum duis dolor culpa consectetur aliquip exercitation id laborum enim Lorem dolor.' },
  { icon: <SlSpeedometer {...iconProps} />, title: 'Vyřídíme za Vás dotaci Nová Zelená Úsporám (Light)', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
  { icon: <SlSpeedometer {...iconProps} />, title: 'Poskytujeme nadstardartní záruku 5 let', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
  { icon: <SlSpeedometer {...iconProps} />, title: 'Snížíme Vám účty za vytápění', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
  { icon: <SlSpeedometer {...iconProps} />, title: 'Ochráníme Vaši nemovitost před horkem', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
  { icon: <SlSpeedometer {...iconProps} />, title: 'Přispějete k ochraně životního prostředí', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
];

const Benefits = () => {
  return (
    <SectionWrapper
      id='benefity'
      innerDivStyle='flex flex-col items-center bg-secondary-600 relative overflow-hidden w-screen'
    >
      <img
        src='/logo/logo-one-color.svg'
        alt='logo'
        className='absolute right-[50%] top-0 scale-125 opacity-5'
      />
      <div className='flex flex-col items-center z-10'>

        <HSecondary additionalStyling='text-5xl mt-16 mb-8'>Proč nás?</HSecondary>

        <ul className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {
            benefits.map((item) => (
              <li
                key={item.title}
                className='py-4 px-16
                flex-1 flex md:flex-col items-center'
              >
                <div className='w-[74px] h-[74px] xl:w-[82px] xl:h-[82px] mr-4 md:mr-0 md:mb-4 xl:mb-8 bg-white rounded-full p-3
                flex justify-center items-center'>
                  {item.icon}
                </div>

                <p className='text-xl md:text-2xl xl:text-3xl p-2 font-semibold text-primary-300'>{item.title}</p>

              </li>
            ))
          }
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Benefits;