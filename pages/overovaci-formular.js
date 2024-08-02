import React, { useEffect } from 'react';
import { GrantForm, Footer, WebsiteHead, StickyPhoneNumber } from '../components';
import configuration from '../conf';
const { url } = configuration;

const SurveyPage = () => {
  useEffect(() => {
    document.body.classList.add('disable-scroll');

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, []);

  return (
    <>
      <WebsiteHead titleSuffix=' - Ověřovací formulář' canonicalHref={`${url}/overovaci-formular`} />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <GrantForm />
        </main>
        <StickyPhoneNumber />
      </div>
    </>
  );
};

export default SurveyPage;
