import React from 'react';
import { HSecondary, SectionWrapper } from './';
import { RxPerson } from 'react-icons/rx';
import { TbAward } from 'react-icons/tb';
import { MdLooksOne } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { GiDiceSixFacesFive } from 'react-icons/gi';
import { FiTrendingDown } from 'react-icons/fi';
import { RiLeafLine } from 'react-icons/ri';
import { GiShieldReflect } from 'react-icons/gi';

const iconProps = {
  size: 100,
  color: '#3e1e0d'
};

const benefits = [
  { icon: <RxPerson {...iconProps} />, title: 'Konzultace a zaměření Vaší nemovitosti zdarma', description: 'Veniam et do aliqua cupidatat ea dolore velit ullamco mollit non enim laborum eu est.' },
  { icon: <TbAward {...iconProps} />, title: 'Garance nejvyšší kvality použitých materiálů', description: 'Deserunt dolor id deserunt non labore.' },
  { icon: <MdLooksOne {...iconProps} />, title: 'Kvalitní realizaci provedeme za jediný den', description: 'Culpa nisi mollit ipsum duis dolor culpa consectetur aliquip exercitation id laborum enim Lorem dolor.' },
  { icon: <GiTakeMyMoney {...iconProps} />, title: 'Vyřídíme za Vás dotaci Nová Zelená Úsporám Light', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
  { icon: <GiDiceSixFacesFive {...iconProps} />, title: 'Realizujeme i revizní lávky', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
  { icon: <FiTrendingDown {...iconProps} />, title: 'Snížíme Vám účty za vytápění', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
  { icon: <GiShieldReflect {...iconProps} />, title: 'Ochráníme Vaši nemovitost před horkem', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
  { icon: <RiLeafLine {...iconProps} />, title: 'Přispějete k ochraně životního prostředí', description: 'Excepteur consequat proident voluptate deserunt ullamco occaecat excepteur.' },
];

const Benefits = () => {
  return (
    <SectionWrapper
      id='benefity'
      innerDivStyle='flex flex-col items-center bg-primary-50 relative overflow-hidden w-screen px-8 md:px-16 lg:px-36'
    >
      <img
        src='/logo/logo-one-color.svg'
        alt='logo'
        className='absolute right-[50%] top-0 scale-125 opacity-5'
      />
      <div className='flex flex-col items-center z-10'>

        <HSecondary additionalStyling='text-5xl mt-16 mb-8'>Proč nás?</HSecondary>

        <ul className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-16'>
          {
            benefits.map((item) => (
              <li
                key={item.title}
                className='
                flex-1 flex md:flex-col items-center'
              >
                <div className='w-[74px] h-[74px] xl:w-[82px] xl:h-[82px] mr-4 md:mr-0 md:mb-4 xl:mb-8 bg-white rounded-full p-3
                flex justify-center items-center'>
                  {item.icon}
                </div>

                <p className='text-xl md:text-2xl xl:text-3xl p-2 font-semibold text-primary-900'>{item.title}</p>

              </li>
            ))
          }
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Benefits;