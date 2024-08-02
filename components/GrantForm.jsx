import React, { useState, useEffect, useRef } from 'react';
import { SectionWrapper } from './';
import { Header, Breadcrumb, SurveyComponent } from '../components';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import { json } from "./json";
const GrantForm = () => {
  const breadcrumbItems = [
    { href: '/', label: 'Úvod', icon: FiHome },
    { href: '/overovaci-formular', label: 'Ověřovací fomulář' }
  ];

  return (
    <>
      <Header />
      <SectionWrapper
        id='dotace'
        innerDivStyle='flex flex-col justify-center bg-primary-25 rounded-lg mx-8 md:mx-16 lg:mx-36 w-screen my-24 md:my-4  relative'
      >
        <Breadcrumb items={breadcrumbItems} />

        <div className="py-10 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ověřovací formulář na dotaci NZÚ Light</p>
              <p className="mt-4 text-lg leading-8 mb-4 text-gray-600">ověřte si zda máte nárok na dotaci!</p>
            </div>
            <SurveyComponent></SurveyComponent>
          </div>
        </div>
      </SectionWrapper >
    </>
  );
};

export default GrantForm;