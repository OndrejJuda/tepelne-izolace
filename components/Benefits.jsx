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
  { icon: <RxPerson {...iconProps} />, title: 'Konzultace a zaměření Vaší nemovitosti zdarma' },
  { icon: <TbAward {...iconProps} />, title: 'Garance nejvyšší kvality použitých materiálů' },
  { icon: <MdLooksOne {...iconProps} />, title: 'Zvolíme vhodný typ izolace pro Váš dům' },
  { icon: <GiTakeMyMoney {...iconProps} />, title: 'Vyřídíme za Vás dotaci Nová Zelená Úsporám Light' },
  { icon: <GiDiceSixFacesFive {...iconProps} />, title: 'Realizujeme i revizní lávky a podlahy' },
  { icon: <FiTrendingDown {...iconProps} />, title: 'Snížíme Vám účty za vytápění až o 30%' },
  { icon: <GiShieldReflect {...iconProps} />, title: 'Ochráníme Vaši nemovitost před horkem' },
  { icon: <RiLeafLine {...iconProps} />, title: 'Přispějete k ochraně životního prostředí' },
];

const Benefits = () => {
  return (
    <SectionWrapper
      id='benefity'
      innerDivStyle='mx-8 md:mx-16 lg:mx-36 bg-primary-50 rounded-lg overflow-hidden shadow-xl w-screen'
    >
      <div className='flex flex-col items-center z-10 mb-6'>
        <HSecondary additionalStyling='text-4xl sm:text-5xl my-12 mb-12 text-center'>
          Proč si vybrat naše služby foukané izolace?
        </HSecondary>
        <div className="container mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {benefits.map((benefit, index) => (
            <div className="flex flex-col items-center p-4" key={index}>
              {benefit.icon}
              <h3 className="my-3 text-2xl text-center">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Benefits;
